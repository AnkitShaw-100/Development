console.log("Hello World");
let a = 10;
let b = 20;
let c = a + b;
console.log(c);

let x1 = document.querySelector("h1");
x1.style.color = "red";
x1.style.fontSize = "50px";
x1.style.textAlign = "center";
x1.style.fontFamily = "Arial";
x1.style.backgroundColor = "yellow";
x1.style.border = "2px solid black";

let y1 = document.querySelector("h1");
setTimeout(() => {
    y1.innerHTML = "Hello World 1";
}, 6000);

let x2 = document.querySelector("h2");
x2.style.color = "blue";
x2.style.fontSize = "50px";
x2.style.textAlign = "center";
x2.style.fontFamily = "Arial";
x2.style.backgroundColor = "pink";
x2.style.border = "2px solid black";

let y2 = document.querySelector("h2");
setTimeout(() => {
    y2.innerHTML = "Hello World 2";
}, 4000);

let x3 = document.querySelector("h3");
x3.style.color = "green";
x3.style.fontSize = "50px";
x3.style.textAlign = "center";
x3.style.fontFamily = "Arial";
x3.style.backgroundColor = "orange";
x3.style.border = "2px solid black";

let y3 = document.querySelector("h3");
setTimeout(() => {
    y3.innerHTML = "Hello World 3";
}, 2000);
