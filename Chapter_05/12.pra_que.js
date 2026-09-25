// valueOf()

let n = Number.valueOf();

console.log(n); // ƒ Number() { [native code] }

let newobj = new Number(10);
console.log("Type = " , typeof(newobj));    // Object

//using valueOf() method..
const num = newobj.valueOf();
console.log("Value of num = ",num);     // 10
console.log("Type of num variable = ", typeof(num));    // number

