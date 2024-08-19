function hello(){
    console.log("Hello, World!");
}

function mellow(){
    console.log("Mellow, World!");
}

setTimeout(hello, 6*300);
setTimeout(mellow, 9*100);


function printNumber(num) {
    console.log(num);
}

function printNumbersInReverseOrder(n) {
    for (let i = 1; i <= n; i++) {
        setTimeout(() => printNumber(i), (n - i) * 200);
    }
}

// Example usage:
printNumbersInReverseOrder(5);