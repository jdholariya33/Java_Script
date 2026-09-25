// Que 1 : Create a function using the "function" keyword that takes a String as an argument 
//         & returns the number of vowels in the string.

function countVowels(str) {
    let count = 0;
    for(let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }

    return count;
}

let res = countVowels("This is a normal string.");  // 6
console.log("Number of vowels in string : ", res);



// Que 2 : Create an arrow function to perform the same task.

const countVow = (str) => {
    let count = 0;
    for(let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }

    return count;
}

let val = countVow("This is arrow function.");  // 7
console.log("Number of vowels in string : ", val);