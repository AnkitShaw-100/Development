const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    // Get input values and convert them to float
    const heightValue = parseFloat(document.getElementById("height").value) / 100;
    const weightValue = parseFloat(document.getElementById("weight").value);

    // Check if inputs are valid numbers
    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
        alert("Please enter valid height and weight values!");
        return;
    }

    // Calculate BMI
    const bmiValue = weightValue / (heightValue * heightValue);

    // Display the BMI result rounded to 2 decimal places
    bmiInputEl.value = bmiValue.toFixed(2);

    // Determine the weight condition
    let condition;
    if (bmiValue < 18.5) {
        condition = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        condition = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        condition = "Overweight";
    } else {
        condition = "Obesity";
    }

    // Display the weight condition
    weightConditionEl.innerText = condition;
    console.log(`BMI: ${bmiValue}, Condition: ${condition}`); // Debugging line
}

// Add event listener to the button
btnEl.addEventListener("click", calculateBMI);
