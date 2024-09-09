// Select all button elements and the display input field
const buttons = document.querySelectorAll("button");
const inputField = document.getElementById("result");

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent; // Get the text content of the button
        
        if (value === "C") {
            // Clear the input field
            inputField.value = "";
        } else if (value === "=") {
            // Calculate the result
            try {
                // Evaluate the expression inside the input field
                let result = eval(inputField.value);
                // Format the result to 2 decimal places
                if (typeof result === 'number') {
                    result = result.toFixed(2);
                }
                inputField.value = result;
            } catch {
                // Show "Error" if the expression is invalid
                inputField.value = "Error";
            }
        } else {
            // Append the button value to the input field
            inputField.value += value;
        }
    });
});
