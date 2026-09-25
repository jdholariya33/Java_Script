// Map method : Create a new array with the result of some operation. 
//              The value its callback returns are used to form new array.

// Syntax : arr_name.map(callBackFnx(value, index, array))


let arr = [25, 19, 35, 10];

let arrSqr = arr.map((val) => {
    return val ** 2;
});

console.log("Array : ", arr);
console.log("Square of Array : ", arrSqr);
