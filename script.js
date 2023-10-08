const timer = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');
const lapButton = document.querySelector('#lap');
const lapList = document.querySelector('#lap-list');

let startTime;
let elapsedTime = 0;
let interval;

// Start the timer
function startTimer() {
  startTime = Date.now();
  interval = setInterval(updateTimer, 10);
}

// Update the timer display
function updateTimer() {
  elapsedTime = Date.now() - startTime;

  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

// Pause the timer
function pauseTimer() {
  clearInterval(interval);
}

// Reset the timer
function resetTimer() {
  clearInterval(interval);
  elapsedTime = 0;
  timer.innerHTML = '00:00:00';
  lapList.innerHTML = '';
}

// Add a new lap to the lap list
function addLap() {
  const lap = document.createElement('li');
  lap.classList.add('lap');

  const lapTime = document.createElement('span');
  lapTime.classList.add('lap-time');
  lapTime.innerHTML = timer.innerHTML;
  lap.appendChild(lapTime);

  const lapNumber = document.createElement('span');
  lapNumber.classList.add('lap-number');
  lapNumber.innerHTML = lapList.childNodes.length + 1;
  lap.appendChild(lapNumber);

  lapList.appendChild(lap);
}

// Add event listeners to the buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', addLap);