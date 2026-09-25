// Reduce method : Performs some operations & reduces the array to a single value.
//                 It returns that single value.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrSum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("Array : ", arr);
console.log("Sum of all the element given in array : ", arrSum);    // 55

// working :
//        res  : 1 | 3 | 6  | 10 | 15 | 21 | 28 | 36 | 45
//        curr : 2 | 3 | 4  | 5  | 6  | 7  | 8  | 9  | 10
//  res + curr : 3 | 6 | 10 | 15 | 21 | 28 | 36 | 45 | 55 --> result(arrSum)


// Now find largest element from the array :

let arrLarge = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log("Largest number from array : ", arrLarge);

// For smallest :

let arrSmall = arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
});

console.log("Smallest number from array : ", arrSmall);
