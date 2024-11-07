const button_ankit = document.getElementById("button-ankit");
const button_babu = document.getElementById("button-babu");

button_ankit.addEventListener("click", function () {
  alert("Ankit maat bolo mujhe nhi pasand 😢");
});

button_babu.addEventListener("click", function () {
  window.location.href = "hello_2.html"; // Navigate to hello_2.html inside the 'propose' folder
});
