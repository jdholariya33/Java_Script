// Primitive Data types: -

// 1. Number:

let age = 21;
console.log(age);
console.log(typeof age); // number

let bill = 250.30;
console.log(bill);
console.log(typeof bill); // number

// 2. String:

let name = "Meet Kanani";
console.log(name);
console.log(typeof name); // string

// 3. Boolean:

let isMale = true;
let isFemale = false;

console.log(typeof isMale + " " + typeof isFemale)  // boolean boolean

// 4. Undefined:

let X;
console.log(X);
console.log(typeof X);  // undefined

// 5. Null:

let Y = null;
console.log(Y);
console.log(typeof Y);  // object

// 6. Bigint:

let x = 123n;
console.log(x);
console.log(typeof x);  // bigint

let y = BigInt(123);
console.log(y);
console.log(typeof y);  // bigint

// 7. Symbol:

let x1 = Symbol("Hello!");
console.log(x1);
console.log(typeof x1);  // symbol