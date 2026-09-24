// Loops

// 1. For loop :

// Print 1 to 5 Numbers

for(let i = 1; i <= 5; i++){    // i is block scope variable(because we use let, if we use var than we can access the i variable outside of the for loop)
    console.log("Hello, How Are You..!!");
}

// sum of 1 to n

let sum = 0;
let n = prompt("Enter Number : ");

for(let i = 1; i <= n; i++){    // i :- iterator
    sum += i;
}

console.log("Sum of 1 to", n,": ", sum);