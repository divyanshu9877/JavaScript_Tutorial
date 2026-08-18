// Arrow Functions

const user = {
    username: "divyanshu",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // this ( current Context(Value) refer )
        console.log(this); // it give current value
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // it give empty object {}


// function chai(){                // In function This not work it give undefined
//     let username = "divyanshu"
//     console.log(this.username);
// }

// chai()

// const chai = function () {          // In function This not work it give undefined
//     let username = "divyanshu"
//     console.log(this.username);
// }

// chai();

const chai = () => {  // in arrow function you cannot use this keyword
    let username = "divyanshu"  
    console.log(this); 

}

// chai();



// Main Arrow Function 

// Explicit Return 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 
// console.log(addTwo(3, 4))

// Implicit Return

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 ) // ( ) parinthisis no need to write return but for { } need to write return
// const addTwo = (num1, num2) => { username: "divyanshu"} // object not return like that
const addTwo = (num1, num2) => ({ username: "divyanshu"}) // Now return the value
 

console.log(addTwo(3, 4))