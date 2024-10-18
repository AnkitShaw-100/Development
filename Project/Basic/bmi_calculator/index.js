let input_wt = document.getElementById("input_weight");
let input_ht = document.getElementById("input_height");
let calculateButton = document.getElementById("calculate");
let output_bmi = document.getElementById("output_bmi");
let output_status = document.getElementById("output_status");

console.log("output_bmi", output_bmi);

calculateButton.addEventListener("click", () => {
  console.log("input_wt", input_wt.value);
  console.log("input_ht", input_ht.value);
  input_wt = parseFloat(input_wt.value);
  input_ht = parseFloat(input_ht.value) / 100;
  console.log("input_wt", input_wt);
  console.log("input_ht", input_ht);

  let bmi = input_wt / (input_ht * input_ht);

  output_bmi.innerHTML = bmi.toFixed(2);
  console.log("bmi", bmi);
  if (bmi < 18.5) {
    output_status.innerHTML = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    output_status.innerHTML = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    output_status.innerHTML = "Overweight";
  } else {
    output_status.innerHTML = "Obese";
  }
});
