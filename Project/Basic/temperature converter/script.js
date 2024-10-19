let input_value = document.getElementById("inputValue"); // Ensure 'inputValue' matches your HTML
let convert = document.getElementById("convert");
let output_farenheit = document.getElementById("outputValueF");
let output_kelvin = document.getElementById("outputValueK");

convert.addEventListener("click", function () {
  let value = parseFloat(input_value.value);
  console.log(value);
  if (isNaN(value)) {
    alert("Please enter a valid number");
    return;
  }
  let farenheit = (value * 9) / 5 + 32;
  let kelvin = value + 273.15;
  output_farenheit.innerHTML =
    "Converted in Fahrenheit: " + farenheit.toFixed(2);
  output_kelvin.innerHTML = "Converted in Kelvin: " + kelvin.toFixed(2);
});
