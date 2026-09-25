// Que 4 : Take a number n as input from user. create an array of numbers from 1 to n.
//         Use the reduce method to calculate sum of all numbers in the array.
//         Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter any number for perform task : ");
let arr = [];

for(let i = 1; i <= n; i++) {
    arr.push(i);
//  arr[i - 1] = i;
}

console.log("Array : ", arr);

let arrSum = arr.reduce((prev, curr) => {
    return prev + curr;
});

console.log("Sum of all elements present in array : ", arrSum);

let arrProd = arr.reduce((prev, curr) => {
    return prev * curr;
});

console.log("Product of all elements present in array : ", arrProd);