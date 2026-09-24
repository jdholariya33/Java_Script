// Que 3 : Prompt the user to enter their full name. Generate a username for them based on the input.
//          Start username with @, followed by their full name and ending with the fullname length.

// Ex : - user name = "jaydholariya", username should be  "@jaydholariya13"

let username = prompt("Enter your username : ");

console.log(`@${username}${username.length}`);

console.log("@" + username + username.length);