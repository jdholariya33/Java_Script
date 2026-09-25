// For-each loop in arrays : It is inbuilt function
//                           and also called method (Because it bind with the arrays and also it use for the strings)

// Syntax : arr_name.forEach(callBackFunction) 
//          callBackFunction : Here, it is a function to execute for each element in the array
//          A callback is a function passed as an argument to another function.

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
    console.log(val);
});

// Using arrow function : 

let arr1 = ["Pune", "Surat", "Ahemdabad", "Navsari"];

arr1.forEach((val, idx, arr1) => {
    console.log(val.toUpperCase(), idx, arr1);
});


// What is "Higher Order Function/Methods " ? :
// forEach loop is HOF/HOM, that either take another function as parameter inside them
//                          or they return another function as their output.