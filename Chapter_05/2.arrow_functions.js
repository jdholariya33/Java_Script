// Arrow functions : Compact way of writing a function.

// Sum of 2 numbers without arrow function :

function sum(a, b) {
    return a + b;
}

let val = sum(19, 13);  // 32
console.log("Sum of two numbers : ", val);

// Sum of 2 numbers using arrow function : (It is part of modern JS)

const sum1 = (a, b) => {
    console.log(a + b);
}

console.log(sum1);  
sum1(135, 25);  //  160




// Multiplication of 2 numbers : 

// Using function :

function mul(x, y) {
    return x * y;
}

let res = mul(37, 19);  // 703
console.log("Multiplication of 2 numbers : ", res);


// Using arrow function : 

let mul1 = (x, y) => {
    return x * y;
}

console.log(mul1);
let calc = mul1(22, 6); // 132
console.log(calc);

// Using arrow function we print hello :

const printHello = () => {
    console.log("Hello..!");
}

printHello();