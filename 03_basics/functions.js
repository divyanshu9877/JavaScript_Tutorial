// Function 


function sayMyName(){
    console.log("C");
    console.log("O");
    console.log("D");
    console.log("E");
    console.log("R");
}

// sayMyName()  // sayMyName this is reference and () this is execution.

// function addTwonumbers(number1, number2){ // parameter
//     console.log(number1 + number2);
// }

 // addTwoumbers(3, 5) // argument 
// const result = addTeoNumber(3, 5)

function addTwoNumbers(number1, number2){
    let result = number1 +number2
    // return result
    // console.log("divyanshu") // after result nothing print
    return number1 + number2
}
 
const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("divyanshu"))
// console.log(loginUserMessage("divyanshu"))

function calculatecartprice(val1, val2, ...num1){ // ... => rest operator or spread operator depend on case
    return num1
}

// console.log(calculatecartprice(200, 400, 500, 2000)) 
const user = {
    username: "divyanshu",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user) // This is first way to pass username and price
handleobject({
    username: "sam", // this is second way to apss the username and price
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400, 500, 1000]));


