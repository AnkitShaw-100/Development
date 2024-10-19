let button = document.getElementById("button");
button.addEventListener("click", function () {
  if (
    document.getElementById("username").value == "" ||
    document.getElementById("password").value == ""
  ) {
    alert("Please fill in the fields");
    return;
  }
  alert("Login Successful");
});
