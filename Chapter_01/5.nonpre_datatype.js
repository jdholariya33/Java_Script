// Non-Primitive Data types: -

// Object:

const student = {
    name : "Meet kanani",
    age : 21,
    cgpa : 8.7,
    isMale : true 
};

console.log(student);
console.log(typeof student); // object

console.log(student["name"]);   // Meet Kanani
console.log(student.age);   // 21

student["age"] += 1;
console.log(student.age);   // 22

student["age"] = 25;
console.log(student.age);   // 25

student['name'] = "yash patel";
console.log(student.name);   // yash patel