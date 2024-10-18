let increaseButton = document.getElementById("increase-button");
let decreaseButton = document.getElementById("decrease-button");
let resetButton = document.getElementById("reset-button");
let counterValue = document.getElementById("counter-value");
let count = 0;

increaseButton.addEventListener("click", () => {
  count++;
  counterValue.innerHTML = count;
});

if (decreaseButton) {
  decreaseButton.addEventListener("click", () => {
    count--;
    counterValue.innerHTML = count;
  });
}

if (resetButton) {
  resetButton.addEventListener("click", () => {
    count = 0;
    counterValue.innerHTML = count;
  });
};
