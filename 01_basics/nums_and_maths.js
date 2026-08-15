/***********************   Nums    **********************/


const score = 400
console.log(score); // 400 (due to the fact that score is a primitive value, we cannot use number methods on it)

const balance = new Number(100);
console.log(balance); // [Number: 100] (due to the fact that balance is an object, we can use number methods on it)

console.log(balance.toString()); // 100 (toString method is available on number objects)
console.log(balance.toString().length); // 3 (length property is available on string objects)
console.log(balance.toFixed(2)); // 100.00 (toFixed method is available on number objects it shows the number of digits after the decimal point 2 number give .00 two value)

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // Precision Value give 123.9 nearest number and round off

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));




/************   Maths   *************/ 

// console.log(Math);
// console.log(Math.abs(-4)); // absolute value -4 convert into 4 (only -ve value convert into +ve )
// console.log(Math.round(4.6)); // It give five round off is 5
// console.log(Math.ceil(4.2)); // Ceilling value (Top Value) it give 5
// console.log(Math.floor(4.9)); // Floor value (Bottom value) it give 4
// console.log(Math.min(4, 5, 8, 6)); // Minimum Value 4
// console.log(Math.max(4, 5, 8, 6)); // Maximum value 8

console.log(Math.random()); // It generate random value Automatically
console.log(Math.floor(Math.random()*10) + 1); // Now minimum Value 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Now minimum value give 10 and Maximim value 20


