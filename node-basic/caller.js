const arrow = require("./arrow-functions");
const { divide } = require("./object-destructure-eg"); // Object destructuring

function sum(a, b) { // Function
    return a + b;
}

const result = sum(20, 30);
console.log("Result: " + result);
console.log("Average: " + arrow.average(20, 30));
console.log("Square: " + arrow.square(20));
console.log("Divide: ", divide(20, 10));
// console.log("Multiply: ", arrow.multiply(20, 30));