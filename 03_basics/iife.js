// Immediately invoked Function Expressions (IIFE)

// IIFE Defination = global scope ke polution se problem hoti hai kaii baar to jo us global scope ke declaration hai usko hatane ke liye humne iife ka use kiya hai 


// first () function defination and second () execution

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();   // if you not use ; semicolon then next function output not printed

( () => {
    // unnamed iife
    console.log(`DB Connected Two`)
})();

// ( function chai() {                   // DB Connected Two
//     console.log(`DB Connected Two`)
// })()

( (name) => {
    // parameter pass iife
    console.log(`DB Connected Two ${name}`);
})(`divyanshu`)

// For Two Combine iife add ; for combined iife

