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

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  timerInterval = setInterval(function () {
    time++;
    timerDisplay.value = time;
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 0;
  timerDisplay.value = time;
}
