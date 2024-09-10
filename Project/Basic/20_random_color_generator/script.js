const button = document.getElementById('flip-button');
const colorText = document.getElementById('color');

button.addEventListener('click', function() {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
});

function generateRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
