// Array Methods: 

// 1. Push method : It add items or data from the end of the array and it make changes in existing array not create a new array. 

let fruits = ["Water melon", "Apple", "Lichi", "Grapes", "Banana"];

console.log("List of fruits : ", fruits);

let pushed = fruits.push("Pineapple");
fruits.push("Coconut", "Dragon Fruit", "Berries");

console.log("List of fruits after pushing items : ", fruits);
console.log("Pushed item : ", pushed);  // It returns count

// 2. Pop method : It remove/delete items/data from the end of the array and also return the item/data that deleted, it makes changes in same/existing array, not create a new array.

let deleted = fruits.pop();

console.log("Updated Fruit List : ", fruits);
console.log("Deleted : ", deleted); // it returns value


// 3. toString method : It convert whole array in string 

let age = [22, 56, 17, 30, 24, 19];

console.log("Data of ages : ", age);  

let strData = age.toString();
console.log("String data : ", strData);
console.log("Type of string data : ", typeof strData);  // string

console.log("After perform task : ", age);  // it not change the existing array
console.log("Type of data(array) after perfrom task : ", typeof age);   // object


// 4. Concatenation method : It joins multiple arrays and return the result (not change in original/existing array)

let marvel = ["Thor", "Ironman", "Spiderman", "Thanos", "Captain America"];
let dc = ["superman", "batman"];


console.log("Data of the array before the concatenation : ", marvel, dc);

let heroes = marvel.concat(dc);

console.log("Concatenation Performed : ", heroes);

console.log("Data of the array after the concatenation : ", marvel, dc);


// 5. Unshift method : It is used for the data entry in array from the start

marvel.unshift("Antman");
marvel.unshift("Night Panther", "Hulk");

console.log("After unshift : ", marvel);    // Make changes in existing/original array 


// 6. Shift method : It remove data from the starting of array and return it.

let val = marvel.shift();
console.log("After shift : ", marvel);  // Makes changes in existing/original array
console.log("Removed element : ", val); // Night Panther


// 7. Slice method : It return a piece of the array (It not change anything in the exixting/original array).

console.log("Marvel list : ", marvel);

let slice1 = marvel.slice(2, 5);
console.log("Slice 1 :", slice1);

let slice2 = marvel.slice(3, );
console.log("Slice 2 : ", slice2);

let slice3 = marvel.slice(-5, -1);
console.log("Slice 3 : ", slice3);


// 8. Splice method : Change in original/existing array syntax : splice(strtidx, delcount, newel...)

let num = [1, 2, 3, 4, 5, 6, 7];

console.log("Number list :", num);

// Remove and Add numbers (Replace) :
num.splice(2,2,101,103);    // [1, 2, 101, 103, 5, 6, 7]

console.log("Number list after splice :", num);

// Add Number :
num.splice(5, 0, 108);  // [1, 2, 101, 103, 5, 108, 6, 7]

console.log("Number list after splice :", num); 

// Remove Number : 
num.splice(2, 1);   // [1, 2, 103, 5, 108, 6, 7]

console.log("Number list after splice :", num); 

// only one parameter : 
num.splice(3);  // It removes all the items from that index

console.log("Number list after splice :", num); // [1, 2, 103]