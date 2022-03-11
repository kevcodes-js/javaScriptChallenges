/* 
Problem 

Given an array of positive integers representing the values of coins in your possession, 
write a function that returns the minimum amount of change (the minimum sum of money) 
that you CANNOT create. The given coins can have any positive integer value and aren't 
necessarily unique (i.e., you can have multiple coins of the same value).
*/

function changeCoins(coins) {
    coins.sort((a,b) => a - b); // Ascending Sorting, to know which is the smallest and greatest number
    let currentValue = 0; // To store the current amount of change that we CAN create
    for (let coin of coins) { // Looping through the coins in an ascending  way
        if (coin > currentValue + 1) return currentValue + 1;
        currentValue += coin; // Addition assigment
    }
    return currentValue + 1;
}
console.log("First Test Case", changeCoins([5, 7, 1, 1, 2, 3, 22]))
console.log("Second Test Case", changeCoins([1, 1, 1, 1, 1]))
console.log("Third Test Case", changeCoins([1, 5, 1, 1, 1, 10, 15, 20, 100]))