// Logical Operators

// Logical AND (&&) Operator

let a = 5;
let b = 6;

let cond1 = a < b; // true
let cond2 = a == 5; // true

console.log("cond1 && cond2 = ", cond1 && cond2); // true

let cond3 = a > b; // false
console.log("cond1 && cond3 = ", cond1 && cond3);   // false

// Logical OR (||) Operator

console.log("cond1 || cond3 = ", cond1 || cond3);    // true
console.log("a > 10 || b > 10 = ", a > 10 || b > 10); // false      

// Logical NOT (!) Operator

console.log("!(6 < 5) = ",  !(b < a)); // true
console.log("!(a == 5) = ", !(a == 5)); // false  