let score = "Divyanshu Kumar";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); // convert string to number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN => Not a Number

//Conversion

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Divyanshu Kumar"; // 1 => true; 0 => false
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false;
//  "Divyanshu Kumar" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string

