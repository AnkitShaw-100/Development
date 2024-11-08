const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// Move 'No' button functionality is disabled (static).
noBtn.addEventListener('click', function() {
    alert("You don't love me 😢");
});

// Move 'Yes' button when user tries to click.
yesBtn.addEventListener('mouseenter', function() {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;
    yesBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Move the 'Yes' button after 2 seconds so it can't be clicked later.
setTimeout(function() {
    yesBtn.addEventListener('mouseenter', function() {
        const randomX = Math.floor(Math.random() * 300) - 150;
        const randomY = Math.floor(Math.random() * 300) - 150;
        yesBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}, 2000);


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

// Apply random movement to the 'boyfriend' button
boyfriend.addEventListener("mouseover", function() {
    moveButtonRandomly(boyfriend);
    // Add random delay to make the movement more erratic
    setTimeout(() => moveButtonRandomly(boyfriend), Math.random() * 1000);
});

boyfriend.addEventListener("click", function () {
    alert("I'm not your Boyfriend 😢");
});

husband.addEventListener("click", function () {
    alert("Thank you my Wife ❤️😊✨");
    window.location.href = "marry.html";
});
