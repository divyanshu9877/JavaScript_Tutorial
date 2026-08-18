// if

const isUserloggedIn = true
const temprature = 41

// if ( temprature === 40 ){       // block ke andar true value hogi to niche scope ke andar value print hoga warna nahi hoga
//     console.log("less than 50");
// } else {
    
//     console.log("temprature is greater then 50")
// }

// console.log("Execute")


// <, >, <=, >=, ==, !=, ===, !==



// const score = 200

// if (score > 100 ) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // power is not defined It give error if put out of the box {}


// Nested if-else

// const balance = 1000

// if (balance > 500) console.log("test"); // not write like this

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance <900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200")
// }


const userLoggedin = true
const debitCard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userLoggedin && debitCard && 2==3) {  // multiple check you do 
    console.log("Allow to buy course");
}

if (loggedinfromgoogle || loggedinfromemail ) { // multiple check you can do 
    console.log("User logged in");
}

