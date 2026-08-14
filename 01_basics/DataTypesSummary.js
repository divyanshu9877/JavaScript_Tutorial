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

// Array, Object, Functions

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