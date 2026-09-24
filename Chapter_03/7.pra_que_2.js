// Que 2 : create a game where you start with any random game number. 
//          Ask the user to keep guessing the game number until the user enters correct value.

let num = 33;
let guess = prompt("Guess a number : ");

while(num != guess) {
    if(guess > num){
        alert("guess number is too large..!");
        guess = prompt("Guess a number again : ");

    } else if(guess < num){
        alert("guess number is too small..!");
        guess = prompt("Guess a number again : ");
    }
}

console.log("Congratulations, you guess the right number..!")