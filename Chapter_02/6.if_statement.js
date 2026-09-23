// Conditional Statements

// if Statement

let age = 21;

if(age >= 18) {
    console.log("You are eligible to vote.");
}

if(age < 18) {
    console.log("You are not eligible to vote.");
}

// Dark / Light mode example

let mode = "Dark";
let color;

if(mode == "Dark") {
    color = "Black";
}

if(mode == "Light"){
    color = "White";
}

console.log("Color is :", color);