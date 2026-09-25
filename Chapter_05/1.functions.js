// Functions : Block of code that performs a specific task, can be invoked(Call) whenever needed.

// Increase the reuseability and reduce the redundancy.

// Function definition :

function printFunc() {
    console.log("It is a function.");
    console.log("It is non-parameterized function.");
}

// Function Call

printFunc();


// Parameterized Function

function printMsg(msg, n) { // Parameter
    console.log(msg);
    console.log(n * n);
}

printMsg("This is the parameterized function.", 3); // arguments


// Function for Addition of 2 numbers :

function sum(a, b) {
    // a & b act as local variable(Block scope)
    console.log("a + b : ", a + b);
}

sum(125, 333);

// Returnable function : Return value

function adition(x, y) {
    add = x + y;
    return add;
    // After return, 100 lines of code become Unreachable.
}

let result = adition(152, 177);
console.log("Addition of two numbers : ", result);
