// Que 3 : create an array to store companies -> "Blommberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//         a. Remove the first company from the array
//         b. Remove Uber & Add Ola in its place
//         c. Add Amazon at the end

let companies = ["Blommberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log("List of Companies : ", companies);


// a. Remove the first company from the array

companies.shift();

console.log("Remove the first company : ", companies);


// b. Remove Uber & Add Ola in its place

companies.splice(1, 1, "Ola");

console.log("Change from Uber to Ola : ", companies);


// c. Add Amazon at the end

companies.push("Amazon");

console.log("After adding Amazon in array : ", companies);