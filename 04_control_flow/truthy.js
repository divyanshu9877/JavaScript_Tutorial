// const userEmail = ""  // empty string give do not have user email => it assum truthy value
// const userEmail = "d@divyanshu.ai"  // Got user email => it assum truthy value 
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, Bigint 0n, "", null, undefined, NaN, falsy value bas itni hi hoti hai

// Truthy Values

// "0", 'false', " ", [], {}, function(){} => (empty function), aur baki sab bhi truthy value hoti hai

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined // ?? double question marks

let val1;
// val1 = 5 ?? 10 // assign 5
// val1 = null ?? 10 // assign 10
// val1 = undefined ?? 15 // assign 15
val1 = null ?? 10 ?? 20 // assign 10



console.log(val1);

// Terniary Operator   // ? single question mark

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")