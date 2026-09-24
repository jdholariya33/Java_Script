// do-while Loop :

// print 1 to 5 numbers 

i = 1

do{
    console.log("Num:", i);
    i++
}while(i <= 5);

// Sum of first n number

let num = prompt("Enter any number : ");

i = 0;
sum = 0;

do{
    sum += i;
    i++
}while(i <= num);

console.log("Sum of 1 to", num, ":", sum);