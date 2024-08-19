let n = 10;
function OneToN(n){
    for (let i = 10; i <= n; i =i + 10) {
        if(n == 1010)
            break;
        console.log(i);
        n = n + 10;
    }
    console.log('Done');
}

OneToN(n);


function eqn(a,b){
    return Math.abs(a*a*a*a*a*a) + Math.abs(b*b*b);
}

console.log (eqn(10,110)); // 64 + 27 = 91