// Que 1: Print all even number from 0 to 100.

// Using For loop :

for(let i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// Using While loop :

let num = 0;

while(num <= 100) {
    if(num % 2 == 0) {
        console.log(num);
    }
    num++;
}

// Using do-while loop :

let n = 0;

do{
    if(n % 2 == 0){
        console.log(n);
    }
    n++;
}while(n <= 100);