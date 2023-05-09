const weatherBlock = document.querySelector('#weather');
const span = document.querySelectorAll('.weather-description span');
const weatherCounter = (() => {
    let count = 0;
    return () => count++;
})();

weatherBlock.onclick = () => {
    const count = weatherCounter();

    span[count%3].classList.add('disappear');
    span[(count+1)%3].classList.remove('hidden');

    setTimeout(() => span[(count+1)%3].classList.add('appear'), 100);
    setTimeout(() => span[count%3].className = 'hidden', 300);
}

function geoOn(position) {
    const gcs = `?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
    const url = `https://keys.wdgwon.workers.dev`;
    const init = {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",	
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "content-type, access-control-allow-methods, access-control-allow-origin, access-control-allow-headers",
            "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(gcs)
    }

    fetch(new Request(url, init)).then(response => response.json())
    .then(data => {
        const img = document.querySelector('#weather img');
        const iconData = data.weather[0].icon;
        img.setAttribute('src',`https://openweathermap.org/img/wn/${iconData}@2x.png`); //icon 뒤에 @2x 붙이면 이미지 크기 2배

        const cityData = data.name;
        const tmpData = `${Number(data.main.temp).toFixed(1)}°C`;
        const descriptionData = data.weather[0].description;
        const dataArray = [cityData,tmpData,descriptionData];
        
        for(let i=0; i<span.length; i++) {
            span[i].innerText = dataArray[i];
            i ? span[i].classList.add('hidden') : span[i].classList.add('appear');
        }
    })
}

function geoOff() {
    alert('날씨정보를 가져올 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(geoOn, geoOff);