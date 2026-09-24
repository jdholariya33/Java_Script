// Que 1 : For a given array with marks of students --> [85, 97, 44, 37, 76, 60]
//         Find the avg marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];

// Using for loop : 

let sum = 0;
let avg;

for(let i = 0; i < marks.length; i++) {
    sum += marks[i];
    avg = sum / marks.length;
}

console.log("Marks : ", marks);
console.log("Average of given marks : ", avg);

// Using For off loop :

let sum1 = 0;
let avg1 = 0;

for(let ele of marks) {
    sum1 += ele;
    avg1 = sum1 / marks.length;
}

console.log("Average of given marks : ", avg1);