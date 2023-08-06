//Variables
var countdown = 0; // variable to set/clear intervals
var seconds = 1500; // seconds left on the clock
var workTime = 25;
var breakTime = 5;
var isBreak = true;
var isPaused = true; 

//Get buttons
var timeLeft = document.getElementById('timeLeft')
var time = document.getElementById('time')
var reset = document.getElementById('reset')
var breakCounter = document.getElementById('breakCounter')
var breakPlus = document.getElementById('breakPlus')
var breakMinus = document.getElementById('breakMinus')
var workCounter = document.getElementById('workCounter')
var workPlus = document.getElementById('workPlus')
var workMinus = document.getElementById('workMinus')
var session = document.getElementById('session')
var start = document.getElementById('startBtn')

//Create alarm
const alarm = document.createElement('audio');
alarm.setAttribute('src', 'alarm.wav')


//events for the buttons
start.addEventListener('click', () => {
  clearInterval(countdown);
  isPaused = !isPaused;
  if (!isPaused) {
    countdown = setInterval(timer, 1000);
  }
})

//reset button
reset.addEventListener('click', () => {
  clearInterval(countdown);
  seconds = workTime * 60;
  countdown = 0;
  isPaused = true;
  isBreak = true;
})

//timer options
function timer() {
  seconds--;
  if (seconds < 0) {
    clearInterval(countdown);
    alarm.currentTime = 0;
    alarm.play();
    seconds = (isBreak ? breakTime : workTime) * 60;
    isBreak = !isBreak;
  }
}

//adding increments
let increment = 1;

let incrementFunctions =
  {
    '#workPlus': function () { workTime = Math.min(workTime + increment, 60) },
    '#workMinus': function () { workTime = Math.max(workTime - increment, 1) },
    '#breakPlus': function () { breakTime = Math.min(breakTime + increment, 60) },
    '#breakMinus': function () { breakTime = Math.max(breakTime - increment, 1) }
  };

for (var key in incrementFunctions) {
  if (incrementFunctions.hasOwnProperty(key)) {
    document.querySelector(key).onclick = incrementFunctions[key];
  }
};

// changing html

function countdownDisplay() {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  timeLeft.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}
/**/
function buttonDisplay() {
  if (isPaused && countdown === 0) {
    start.textContent = "START";
  } else if (isPaused && countdown !== 0) {
    start.textContent = "Continue";
  } else {
    start.textContent = "Pause";
  }
}

function updateHTML() {
  countdownDisplay();
  buttonDisplay();
  workCounter.textContent = workTime;
  breakCounter.textContent = breakTime;
}

window.setInterval(updateHTML, 100);

document.onclick = updateHTML;
