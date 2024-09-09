let num = 0;
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        // Update the number based on the button clicked
        if (styles.contains("decrease")) num--;
        else if (styles.contains("increase")) num++;
        else num = 0;

        // Update the displayed number and color
        value.textContent = num;
        value.style.color = num > 0 ? "green" : num < 0 ? "red" : "black";
    });
});
