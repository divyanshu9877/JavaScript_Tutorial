// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123') // unique identifier
const anotherId = Symbol('123') // unique identifier

console.log(id === anotherId) // false => unique identifier

const bigNumber = 467467825475n // BigInt => used to store large numbers




// Reference ( Non-Primitive )

// Array, Object, Functions, (Others => Time, Date, anything else that is not a primitive data type)

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Divyanshu Kumar",
    age: 21,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof score) // number
console.log(typeof scoreValue) // number
console.log(typeof isLoggedIn) // boolean
console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof myFunction) // function object
console.log(typeof null) // object => bug in JS => null is primitive but typeof null returns object
console.log(typeof userEmail) // undefined
console.log(typeof id) // symbol
console.log(typeof bigNumber) // bigint
console.log(typeof anotherId) // symbol
console.log(typeof outsideTemp) // object => bug in JS => null is primitive but typeof null returns object
console.log(typeof undefined) // undefined


/**************** MEMORY *****************/


// Primitive => stored in stack memory => faster access
// Reference (Non-Premitive) => stored in heap memory => slower access


// Stack Memory => Primitive => stored in stack memory => faster access

let myYoutubename = "Divyanshu Kumar"

let anotherName = myYoutubename // copy of value is stored in anotherName
anotherName = "Coder Chirag" // changing the value of anotherName does not affect myYoutubename

console.log(myYoutubename); // Divyanshu Kumar
console.log(anotherName); // Coder Chirag

// Heap Memory => Reference (Non-Primitive) => stored in heap memory => slower access

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"

}

let userTwo = userOne; // reference of userOne is stored in userTwo

userTwo.email = "divyanshu@google.com" // changing the value of userTwo affects userOne as both are pointing to the same object in heap memory
console.log(userOne.email);
console.log(userTwo.email); 