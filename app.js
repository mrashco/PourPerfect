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

    document.querySelector("#coffeeAmountResult").value = coffeeAmountGrams;
    document.querySelector("#waterAmountResult").value = waterAmountGrams;
    document.querySelector("#milkAmountResult").value = milkAmountGrams;
});


// Dark mode
const toggle = document.querySelector('#dark-mode-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
