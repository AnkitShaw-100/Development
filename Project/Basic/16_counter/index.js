let num = 0; // Initialize the counter
const value = document.querySelector(".value"); // Select the element displaying the number
const btns = document.querySelectorAll(".btn"); // Select all buttons

// Function to update the displayed number
function updateDisplay() {
    value.textContent = num; // Set the text content to the current number
    value.style.color = getColor(); // Set the color based on the number
}

// Function to get the color based on the number
function getColor() {
    if (num > 0) return "green";
    if (num < 0) return "red";
    return "black";
}

// Function to handle button click events
function handleClick(e) {
    const buttonClassList = e.currentTarget.classList; // Get the class list of the clicked button

    if (buttonClassList.contains("decrease")) {
        num--; // Decrease the number
    } else if (buttonClassList.contains("increase")) {
        num++; // Increase the number
    } else {
        num = 0; // Reset the number
    }

    updateDisplay(); // Update the display after changing the number
}

// Add event listeners to all buttons
btns.forEach((btn) => {
    btn.addEventListener("click", handleClick);
});
