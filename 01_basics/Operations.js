
// ************ Operations ************

let value = 3
let negValue =-value
// console.log(negValue);

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 2^3 => 2*2*2
// console.log(2/3); // 0.6666666666666666
// console.log(2%3); // 2 => remainder of 2/3

let str1 = "Hello"
let str2 = " Divyanshu"

let str3 = str1 + str2
// console.log(str3); // Divyanshu Kumar

// console.log("1" + 2); // 12 => string
// console.log(1 + "2"); // 12 => string
// console.log("1" + 2 + 2); // 122 => string
// console.log(1 + 2 + "2"); // 32 => first conversion then string

 // console.loglog(3 + 4 * 5 %3); // This is not good practice => 3 + (4*5) % 3 => 3 + 20 % 3 => 3 + 2 => 5


 //console.log(+true); // 1 => true => 1
 //console.log(+false); // 0 => false => 0
 // console.log(true+); // it give error => unexpected token
 //console.log(+""); // 0 => empty string => 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // right to left => num3 = 4 => num2 = 4 => num1 = 4 ( But this is not good practice => it is better to write in separate lines)

let gameCounter = 100
gameCounter++ // 101 => increment by 1 postfix
++gameCounter // 102 => increment by 1 prefix
console.log(gameCounter);