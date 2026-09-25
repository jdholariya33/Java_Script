// Que 2 : For a given array of numbers, print the square of each value using the forEach loop.


let arr = [1, 2, 3, 4, 5];

arr.forEach((val, idx) => {
    arr[idx] = val ** 2;
});

console.log("Array : ", arr);   // [1, 4, 9, 16, 25]

let nums = [12, 14, 36, 25];

nums.forEach((num) => {
    console.log(num * num);
});

console.log("Array : ", nums);  // [12, 14, 36, 25]



// Using diff method : 

let arr1 = [35, 19, 27, 44];

let calcSqr = (num, i) => {
    arr1[i] = num ** 2;
}

arr1.forEach(calcSqr);

console.log("Array : ", arr1);  // [1225, 361, 729, 1936]