// Template Literals : "String Interpolation : To Create Strings by doing substitution of placeholders"

// How to create :

let specialString = `This is a template literal`;
console.log(specialString);
console.log("Type of this : ", typeof specialString);

// Why we use this :

// Example:

let obj = {
    item : "pen",
    cost : 10
};

console.log("The cost of", obj.item, "is", obj.cost, "ruppes.");

// Using Template Literal :

console.log(`The cost of ${obj.item} is ${obj.cost} ruppes.`);