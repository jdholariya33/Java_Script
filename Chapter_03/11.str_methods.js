// Methods in string

// 1. Upper case : 

let str = "Jay Dholariya";
let newstr = str.toUpperCase();
console.log(str);   // String is Immutable
console.log(newstr);

let str2 = "Meet Kanani";
str2 = str2.toUpperCase();
console.log(str2);


// 2. Lower case :

let str3 = "Hello World";
console.log(str3);
console.log(str3.toLowerCase());


// 3. Trim method :

let str4 = "  This Is Trim    Method  ";
console.log(str4.trim());   // Remove Spaces from starting and ending


// 4. Slicing :

let str5 = "Hey Meet Kanani.!";
console.log(str5.slice(2, 8));  // y Meet
console.log(str5.slice(7));     // t Kanani.!
console.log(str5.slice(-8,-1)); // Kanani.
console.log(str5.slice(-10));   // t Kanani.!


// 5. Concatenation :

let str6 = "How";
let str7 = "Are you ?"; 

console.log(str6.concat(str7));     // HowAre you ?
console.log(str7.concat(str6));     // Are you ?How

console.log(str6 + str7);           // HowAre you ?
console.log(str6 + str7 + " Jay");  // HowAre you ? Jay

console.log("Hello" + 123);         // Hello123


// 6. Replace :
 
let str8 = "Hello!!";
console.log(str8.replace("H","Y")); // Yello!!
console.log(str8.replace("lo", "p")); // Help!! 

console.log(str8.replace("l", "L"));  // HeLlo!!
console.log(str8.replaceAll("l","L"));  // HeLLo!!

// 7. charAt :

let str9 = "Java Script";

console.log(str9.charAt(0));    // J
console.log(str9.charAt(3));    // a

