const stBtn = document.querySelector('.stopwatch_startstop');
const reBtn = document.querySelector('.stopwatch_reset');
let swDis = document.querySelector('.stopwatch_panel ul li');
let swBuffer = {};
let swCount = 0;
let isFilp = false;

let swInterval = setInterval(setSwDisplay);
clearInterval(swInterval);
setSwDisplay();

stBtn.addEventListener("click", setStartStop);
reBtn.addEventListener("click", () => {
    if(isFilp) {
        setStartStop();
        return;
    }
    swBuffer = {};
    swCount = 0;
    setSwDisplay();
});

function setStartStop() {
    if(isFilp) {
        isFilp = false;
        clearInterval(swInterval);
        setSwDisplay();
        return;
    }
    setSwDisplay();
    isFilp = true;
    swInterval = setInterval(setSwDisplay, 10);
}

function setSwDisplay() {
    swBuffer.milli = (swCount++)%100;
    swBuffer.sec = (Math.floor(swCount/100))%60;
    swBuffer.min = (Math.floor(swCount/6000))%60;

    const swMin = String(swBuffer.min).padStart(2,'0');
    const swSec = String(swBuffer.sec).padStart(2,'0');
    const swMilli = String(swBuffer.milli).padStart(2,'0');

    swDis.innerText = `${swMin}:${swSec}:${swMilli}`;
    stBtn.innerText = isFilp ? 'STOP' : 'START';
}