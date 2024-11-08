// Function to move the button randomly
function moveButtonRandomly(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }
  
  const boyfriend = document.getElementById("boyfriend");
  const husband = document.getElementById("husband");
  
  boyfriend.addEventListener("click", function () {
    alert("Ankit maat bolo mujhe nhi pasand 😢");
  });
  
  husband.addEventListener("click", function () {
    alert("Thank you my Wife ❤️😊✨");
    window.location.href = "marry.html";
  });
  
  // Apply the random movement to the 'boyfriend' button
  husband.addEventListener("mouseover", function () {
    moveButtonRandomly(boyfriend);
    // Add random delay to make the movement more erratic
    setTimeout(() => moveButtonRandomly(boyfriend), Math.random() * 1000);
  });
  