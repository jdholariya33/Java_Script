// Looping in array : Print all elements of an array.
// Loop --> Iterable (String, Object, Array) --> Collection of Item.

// Using For loop :

let arr = ["Mango", "Apple", "Banana", "Water Melon", "Strawberry", "Grapes", "Lichi", "Chiku"];

for(let idx = 0; idx < arr.length; idx++) {
    console.log("Fruits : ", arr[idx]);
}

// Using For-of Loop :

for(let el of arr) {
    console.log(el);
}

// Using For-in Loop :

for(let i in arr) {
    console.log(arr[i]);
}


let cities = ["Suart", "Ahemdabad", "Mumbai", "Vadodra", "Pune", "Hyderabad"];

for(let city of cities) {
    console.log(city.toUpperCase());
}