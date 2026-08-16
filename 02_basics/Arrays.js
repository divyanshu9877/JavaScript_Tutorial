 // Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array Methods

// myArr.push(6) // value Print 0, 1, 2, 3, 4, 5, 6
// myArr.push(7) // Value print 0, 1, 2, 3, 4, ,5 ,6 ,7
// myArr.pop() // value Print 0, 1, 2, 3, 4, ,5 ,6


// myArr.unshift(9)  // insert in array starting like 9, 0, 1, 2, 3, 4, 5, 6
// myArr.shift()  // remove first element from array => Input : (0, 1, 2, 3, 4, 5) Output : (1, 2, 3, 4, 5)


// console.log(myArr.includes(9)); // It help to question from array like 9 is present or not (Answer Is : false => Boolean)
// console.log(myArr.indexOf(9)); // It give -1 because this is not present and ye nhi janta hai 
// console.log(myArr.includes(3)); // it give 3 because index number is 3


// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3) // A = [ 0, 1, 2, 3, 4, 5 ] [ 1, 2 ] 1, 3 add(copy) in slice


console.log(myn1);
console.log("B", myArr); // B = [ 0, 1, 2, 3, 4, 5 ] Original Array


const myn2 = myArr.splice(1, 3) // 1, 2, 3 Remove in Splice Output => C = [ 0, 4, 5 ] [ 1, 2, 3 ]
console.log("C", myArr);
console.log(myn2);
