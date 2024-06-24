let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');


startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', resetWatch);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startStopBtn.textContent = 'Stop';
        startStopBtn.style.backgroundColor = '#dc3545';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.textContent = 'Start';
        startStopBtn.style.backgroundColor = '#28a745';
    }
}

function resetWatch() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.textContent = 'Start';
    startStopBtn.style.backgroundColor = '#28a745';
    display.textContent = '00:00:00';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;
}
