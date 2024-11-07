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
