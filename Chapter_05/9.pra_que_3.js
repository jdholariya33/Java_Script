// Que 3 : We are given array of marks of students. 
//         Filter out of the marks of students that scored 90+.

let marks = [85, 93, 76, 90, 82, 96, 70];

let arrMarks = marks.filter((val) => {
    return val > 90;
});

console.log("Marks of students : ", marks);
console.log("Marks of student who got 90+ : ", arrMarks);   // [93, 96]