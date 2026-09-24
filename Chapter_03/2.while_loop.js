// While Loop :

// print 1 to 5 numbers

let i = 1;

while(i <= 5) {
    console.log("Num = ", i)
    i++
}

// Print sum of 1 to n numbers

let num = prompt("Enter any number : ");
sum = 0;
i = 0;

while(i <= num){
    sum += i;
    i++
}

console.log("Sum of 1 to", num, ":", sum);