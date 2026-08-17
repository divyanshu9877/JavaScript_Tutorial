// Singleton


// const tinderUser = new Object()  // the output will same {} due to this is singleton object
const tinderUser = {} // the output will same {} But this is non Singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "divyanshu",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4} // spread operator ...
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));



// Object De Structuring

const course = {
    coursename: " js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseinstructor 

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);



// API

// JSON Formate

// {
//     "name": "divyanshu",
//     "coursename": "js in hindi",  // look like object in JSON formate
//     "price": "free"
// }

// [
//     {},
//     {},    // Some time give in array
//     {}
// ]