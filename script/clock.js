const clock = document.querySelector('h2#clock');


function getClock() {
    const date = new Date();
    const time_hour = String(date.getHours()).padStart(2,'0');
    const time_minute = String(date.getMinutes()).padStart(2,'0');
    const time_second = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${time_hour}:${time_minute}:${time_second}`;
}

getClock();
setInterval(getClock, 1000);