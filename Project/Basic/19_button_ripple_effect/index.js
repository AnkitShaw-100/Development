const btnE1 = document.querySelector('.btn');

btnE1.addEventListener("mouseover", (event) =>{
    const x = event.pageX - btnE1.offsrtLeft;
    const y = event.pageY - btnE1.offsrtTop;

    btnE1.style.setProperty('--xPos',x  + "px");
    btnE1.style.setProperty('--yPos',y  + "px");
});