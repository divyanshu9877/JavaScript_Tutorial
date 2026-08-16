// Dates

let myDate = new Date() //  Typeof myDate is a ( Object )
// console.log(myDate.toString()); // Sun Aug 16 2026 12:25:13 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2026-08-16T06:55:13.952Z
// console.log(myDate.toJSON()); // 2026-08-16T06:55:13.952Z
// console.log(myDate.toLocaleString()); // 16/8/2026, 12:25:13 pm
// console.log(myDate.toLocaleTimeString()); // 12:25:13 pm
// console.log(myDate.toDateString()); // Sun Aug 16 2026
// console.log(myDate.toTimeString()); // 12:25:13 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); // Sun, 16 Aug 2026 06:55:13 GMT
// console.log(myDate.getTimezoneOffset()); // -330


// console.log(typeof myDate); // It is a Object

// let myCreatedDate = new Date(2026, 7, 16) // Months Start with 0 ( Output is : Sun Aug 16 2026 )
// let myCreatedDate = new Date(2026, 7, 16, 12, 38) // in This Time Add ( Output is : 16/8/2026, 12:38:00 pm )
// let myCreatedDate = new Date("2026-08-16") // dd/mm/yy formate with time ( Output is : 16/8/2026, 5:30:00 am )
let myCreatedDate = new Date("08-16-2026") // mm/dd/yy formate with time Use in India ( Output is : 16/8/2026, 5:30:00 am )
// console.log(myCreatedDate.toLocaleString());


// convert into milisecond

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


// Convert into Second
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} The Time Is : ` // Sting Intepulation


newDate.toLocaleString('default', {
    weekday: "long"
})



