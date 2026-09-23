// else-if Statement / if-else Ladder

let mode = "Dark";
let color;

if(mode === "Dark") {
    color = "Black";
} else if(mode == "Light") {
    color = "White";
} else if(mode == "Blue") {
    color = "Blue";
} else {
    color = "Pink";
}

console.log("color is :", color);


// Grade-Marks Example

let marks = 94;

if(90 <= marks && marks <= 100) {
    console.log("A+ Grade");
} else if(80 <= marks && marks <= 90) {
    console.log("A Grade");
} else if(70 <= marks && marks <= 80) {
    console.log("B Grade");
} else if(60 <= marks && marks <= 70) {
    console.log("C Grade");
} else if(50 <= marks && marks <= 60) {
    console.log("D Grade");
} else if(40 <= marks && marks <= 50) {
    console.log("E Grade");
} else if(marks < 40) {
    console.log("Better Luck Next Time");
} else {
    console.log("Invalid Marks..!");
}