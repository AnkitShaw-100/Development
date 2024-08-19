let a = "Ankit is learning JavaScript";
let b = "JavaScript is a programming language";



//Using length function to find the length of the string
console.log(a, "The length of the string is: ", a.length);
console.log(b, "The length of the string is: ", b.length);



//Using Split funtion 
// Split function : splits a string into an array of substrings
let c = a.split(" ");
console.log(c);
let d = b.split(" ");
console.log(d);



//Slice function
// Slice function : extracts a part of a string and returns the extracted part in a new string
let e = a.slice(0, 5);
console.log(e);
let f = a.slice(0, 9);
console.log(f);
let g = a.slice(6, 18);
console.log(g);




//Concat function
let h = a.concat(b);
console.log(h);



//Repeat function
let i = a.repeat(20);
console.log(i);    



//toupperCase function
let j = a.toUpperCase();
console.log(j);
//tolowerCase function
let k = a.toLowerCase();
console.log(k);
//trim
let l = a.trim();
console.log(l);
//Substring
let m = a.substring(0, 5);
console.log(m);





