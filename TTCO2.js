/*
Problem

Write a function that takes in a non-empty array of integers that are sorted in ascending 
order and returns a new array of the same length with the squares of the original integers 
also sorted in ascending order.
*/

function sortingSquares(integers) {
    for (let i = 0; i < integers.length; i++)
        integers[i] = integers[i] * integers[i];
    return integers.sort((a,b) => a - b) // Returning the numbers sorted in an ascending  way
}

console.log("First Test Case", sortingSquares([1, 2, 3, 5, 6, 8, 9]))
console.log("Second Test Case", sortingSquares([-2, -1]))
console.log("Third Test Case", sortingSquares([-10, -5, 0, 5, 10]))