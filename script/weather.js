const API_KEY = '8f93f7e0aad72d681df3d4d4e0b2d8c4';

function geoOn(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        weather.innerText = data.name;
        city.innerText = data.weather[0].main;
    })
}

function geoOff() {
    alert('날씨정보를 가져올 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(geoOn, geoOff);