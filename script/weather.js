const weatherBlock = document.querySelector('#weather');
const span = document.querySelectorAll('.weather-description span');
let count = 0;

weatherBlock.onclick = () => {
    span[count%3].classList.add('disappear');
    span[(count+1)%3].classList.remove('hidden');
    setTimeout(() => span[(count+1)%3].classList.add('appear'), 100);
    setTimeout(() => span[count++%3].className = 'hidden', 300);
}

function geoOn(position) {
    const req = `?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
    const url = `https://api.openweathermap.org/data/2.5/weather${req}&appid=1b05b24164b4b58d9bc7ed9d62b69313&units=metric`

    fetch(url).then(response => response.json())
    .then(data => {
        console.log(data);
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