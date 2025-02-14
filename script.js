var ms = 0, s = 0, m = 0, h = 0;
var timer; 
let startBtn = document.querySelector("#startTimer"); 
let isStart = false; 
let countLaps = 0;
var display = document.querySelector(".timer-Display");
var laps = document.querySelector(".laps");

// Start and Pause Timer
startBtn.addEventListener("click", () => {
    if (!isStart) {
        // Start the timer
        isStart = true;
        startBtn.innerText = "Pause";
        timer = setInterval(run, 10);
    } else {
        // Pause the timer
        isStart = false;
        startBtn.innerText = "Start";
        clearInterval(timer);
        timer = null;
    }
});

// Lap Functionality
document.querySelector("#lap").addEventListener("click", lap);

// Reset Timer and Laps Functionality
document.querySelector("#resetTime").addEventListener("click", reset);

function run() {
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }

    if (h == 13) { // 12-hour reset
        h = 1;
    }

    display.innerHTML = getTimer();
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + 
           (m < 10 ? "0" + m : m) + " : " + 
           (s < 10 ? "0" + s : s) + " : " + 
           (ms < 10 ? "0" + ms : ms);
}

// Reset Timer and Laps
function reset() {
    // Clear the timer
    clearInterval(timer);
    timer = null;
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = getTimer();
    
    // Clear the lap times
    laps.innerHTML = "";
    countLaps = 0;
}

function lap() {
    if (countLaps == 5) {
        laps.classList.add("scroll");
    }
    var Li = document.createElement("li");
    Li.innerHTML = getTimer();
    Li.style.listStyle = "none";
    laps.appendChild(Li);
    countLaps++;
}
