arr = [1,2,3,4,5,6];
n = arr.length;
console.log("Length of Array is : ",n);

//prinitng array without for loop
console.log("Array is : ",arr);

//printing array using for loop
for(i = 0; i < n; i++){
    console.log("Element at index ",i," is : ",arr[i]);
}



// Using push and pop functions
arr.push(7);
console.log("Array after pushing 7 : ",arr);
arr.push(8);
console.log("Array after pushing 7 : ",arr);
arr.push(9);
console.log("Array after pushing 7 : ",arr);
arr.push(10);
console.log("Array after pushing 7 : ",arr);

arr.pop();
console.log("Array after popping : ",arr);
arr.pop();
console.log("Array after popping : ",arr);
arr.pop();      
console.log("Array after popping : ",arr);



// Constant array 
const arr1 = [1,2,3,4,5];
console.log("Array is : ",arr1);
arr1.push(6);
console.log("Array after pushing 6 : ",arr1);



//Creating 2D array
arr2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log("Array is : ",arr2);


//Array can store all type of datatypes
arr2 = [1,2,3,4,5,"Hello","Ankit",true,false];
console.log("Array is : ",arr2);


//forEach function
arr2.forEach(function(element){
    console.log("Element is : ",element);
})
