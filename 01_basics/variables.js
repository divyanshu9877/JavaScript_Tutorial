const accountId = 123456789;
let accountEmail = "divyanshu@gmail.com"
var accountPassword = "12789";
accountCity = "Uttar Pradesh";
let accountState; // if value is not assigned then it will be undefined

// accountId = 2 // not allowed because accountId is a constant

accountEmail = "dk@gmail.com" // allowed because accountEmail is a variable declared with let
accountPassword = "123456" // allowed because accountPassword is a variable declared with var
accountCity = "Delhi" // allowed because accountCity is a variable declared without var, let or const

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/* Prefer not use var  
Because of issue in block scope and functional scope 
*/
