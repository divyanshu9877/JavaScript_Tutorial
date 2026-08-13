"use strict"; // treat all JS code as newer version of JS


// alert (3 + 3) // we are using nodejs, not browser, so alert will not work here, it will give error

console.log(3 +3); console.log("Divyanshu Kumar") // avoid using semicolon, but it is a good practice to use semicolon at the end of each statement and not use both console in a single line, because it is not good practice to write code in a single line, it is hard to read and understand the code, so always write code in multiple lines, it is easy to read and understand the code



//  Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript

let name = "Divyanshu Kumar"; // string
let age = 21; // number
let isLoggedIn = false; // boolean
let state; // undefined

// number => 2 to power 53 => 9007199254740992 => 16 digit number
// bigint => 2 to power 63 => 9223372036854775807 => 19 digit number
// string => "Divyanshu Kumar" => 13 character string
// boolean => true or false
// null => standalone value that represents nothing or empty value
// undefined => value that is not assigned to a variable
// sybol => unique value that is used to identify object properties


// object 

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // undefined
console.log(typeof null); // object
