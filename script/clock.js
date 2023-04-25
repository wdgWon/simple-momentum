const clock = document.querySelector('#clock');
const MERIDIEM = 'meridiem';

function getClock() {
    const isMeridiem = clock.classList.contains(MERIDIEM);
    const date = new Date();
    const full_hour = date.getHours();
    const time_hour = String(full_hour%(isMeridiem?12:24)).padStart(2,'0');
    const time_minute = String(date.getMinutes()).padStart(2,'0');
    const meridiem = isMeridiem ? full_hour>11 ? 'pm' : 'am' : '';
    clock.innerHTML = `<span>${meridiem}</span>${time_hour}:${time_minute}`;
}

clock.onclick = () => {
    clock.classList.toggle(MERIDIEM);
    getClock();
}

getClock();
setInterval(getClock, 10000);