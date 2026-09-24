// Que 2 : For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//         All items have an offer of 10% OFF on them. 
//         Change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];

console.log("Prices of each item before applying the offer : ", prices);

// Using For loop :

for(let i = 0; i < prices.length; i++) {
    let val = prices[i] - (prices[i] / 10);  
    prices[i] = val;
}

console.log("Prices after apply offer : ", prices);

// Using For-of loop : 

let items = [250, 645, 300, 900, 50];

let idx = 0;    // It is not part of the loop, We use index indirectly

for(let el of items) {
    items[idx] = el - (el / 10);
    idx++;
}

console.log("Prices after apply 10% offer on each item : ", items);