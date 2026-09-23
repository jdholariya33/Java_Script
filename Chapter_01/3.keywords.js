// Keywords: - var, let, const

// 1. var

var age = 20;
var age = 22;
age = 23;

print(age); // 23   
console.log(age); // 23


// 2. let

let name = "Jay";
print(name); // Jay

name = "Meet";
console.log(name);

let surname;
console.log(surname);   // Undefined
surname = "Dholariya";
console.log(surname);   // Dholariya

{
    let a = 5; // Code block
    console.log(a); // 5 
}

let a = 10;
console.log(a); // 10

// 3. const

const PI = 3.14;
console.log(PI);