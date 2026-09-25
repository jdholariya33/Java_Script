// Que 5 : Take prompt as name from the user and reverse their name and return it.

// Without Function / Using For loop  and For-off loop :

// For loop : 

let name = prompt("Enter your name : ");
let reversed = "";

for(let i = name.length - 1; i >= 0; i--) {
    reversed = reversed + name[i];
}

console.log("Name : ",name);
console.log("Reversed name : ",reversed);


// For-of loop : 

reversed = "";

for(let char of name) {
    reversed = char + reversed;
}

console.log("Name : ",name);
console.log("Reversed name : ",reversed);


// Using In-built functions : 

reversed = name.split("").reverse().join("");

console.log("Name : ",name);
console.log("Reversed name : ",reversed);