// Singleton



// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Divyanshu",
    "full name": "Divyanshu Kumar",  // This value not acces with . (exaple: .email) only access with ["full name"] 
    [mySym]: "mykey1",   // for print symbol use [] for declare the sybbol
    age: 22,
    location: "Ayodhya",
    email: "divyanshu@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // only print with ["full name"]
// console.log(jsUser.full name)  // not print with .full name
// console.log(jsUser."full name")  // not print with "full name"
// console.log(JsUser[mySym]) // [mySym] for print the symbol and output is mykey1

JsUser.email = "divyanshu@chatgpt.com" // Override the value and change the email (Value)
// Object.freeze(JsUser) // it help to free the value and not to change now

JsUser.email = "divyanshu@microsoft.com",
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());