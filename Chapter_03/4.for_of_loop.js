// for-of Loop :

// on string

let str = "Hello World!"

for(let val of str){
    console.log("val : ", val);
}

// find size/length of the string

let size = 0;

for(let i of str){
    size++;
}

console.log("Size of String: ", size);