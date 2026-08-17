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
console.log(loginUserMessage("divyanshu"))

