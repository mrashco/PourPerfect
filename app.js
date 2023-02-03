// Conversion
const calculateBtn = document.querySelector("#calculateBtn");
calculateBtn.addEventListener("click", () => {
    const ratio = document.querySelector("#ratio").value;
    const ratioArr = ratio.split(":");
    const coffeeAmount = document.querySelector("#coffeeAmount").value;
    const coffeeRatio = parseInt(ratioArr[0]);
    const waterRatio = parseInt(ratioArr[1]);
    const coffeeAmountGrams = coffeeAmount * coffeeRatio;
    const waterAmountGrams = coffeeAmount * waterRatio;
    const milkAmountGrams = (coffeeAmount * waterRatio) / 2;
    const sweetenerAmount = (coffeeAmount * waterRatio) / 40;

    document.querySelector("#coffeeAmountResult").value = coffeeAmountGrams;
    document.querySelector("#waterAmountResult").value = waterAmountGrams;
    document.querySelector("#milkAmountResult").value = milkAmountGrams; 
    document.querySelector("#sweetenerAmountResult").value = sweetenerAmount; 
  });


// Dark mode
// const toggle = document.querySelector('#dark-mode-toggle');

// toggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// Timer
let timerDisplay = document.querySelector("#timerDisplay");
let startBtn = document.querySelector("#startBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let resetBtn = document.querySelector("#resetBtn");

let timerInterval;
let time = 0;
let isRunning = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  isRunning = true;
  startBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
  
  timerInterval = setInterval(function () {
    time++;
    timerDisplay.value = time;
  }, 1000);

  // Setting the timerInterval to run every 1 millisecond and increment the time variable
  // timerInterval = setInterval(function () {
  //   time++;
    // Calculating the minutes, seconds, and milliseconds

    // let res = Math.floor(time / 1000);
    // let milliseconds = time.toString().substr(-3);
    // let seconds = res % 60;
    // let minutes = (res - seconds) / 60;

    // let minutes = Math.floor(time / 60 / 1000);
    // let seconds = Math.floor(time / 1000) % 60;
    // let milliseconds = time % 1000;

    // Formatting the time in the format of minutes:seconds:milliseconds
    // let formattedTime = `${minutes}:${seconds}:${milliseconds}`;
    // Updating the timer display with the formatted time
    // timerDisplay.value = formattedTime;
  // }, 1);
}


function pauseTimer() {
  isRunning = false;
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  clearInterval(timerInterval);
}

function resetTimer() {
  isRunning = false;
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  clearInterval(timerInterval);
  time = 0;
  timerDisplay.value = time;
}
