// Que 2: write a code which can give grades to students according to their scores:
//          90-100, A
//          70-89, B
//          60-69, C
//          50-59, D
//          0-49, F

let score = prompt("Enter your score (0-100) :");

if(score >= 90 && score <= 100) {
    console.log("A Grade");
} else if(score >= 70 && score <= 89) {
    console.log("B Grade");
} else if(score >= 60 && score <= 69) {
    console.log("C Grade");
} else if(score >= 50 && score <= 59) {
    console.log("D Grade");
} else if(score >= 0 && score <= 49) {
    console.log("F Grade");
} else {
    console.log("Invalid Score..!");
}