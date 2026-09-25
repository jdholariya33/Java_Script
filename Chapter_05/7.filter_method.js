// Filter method : Creates a new array of elements that give true for a condition/filter.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter out even numbers from this array : 

let arrEven = arr.filter((val) => {
    return val % 2 === 0;
});

let arrOdd = arr.filter((val) => {
    return val % 2 !== 0;
});

console.log("Array : ", arr);
console.log("Array with even numbers only : ", arrEven);
console.log("Array with odd numbers only : ", arrOdd);


// Filter out values those are greater than 5 :

let gtrArr = arr.filter((val) => {
    return val > 5;
});

console.log("Arrays with values that greater than 5 : ", gtrArr);


// After all the filter process the original array can't affect or not change

console.log("After all filter process the original array : ", arr);