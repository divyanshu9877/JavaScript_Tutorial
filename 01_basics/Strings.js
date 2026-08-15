const name = "Divyanshu"
const repoCount = 50

 // console.log(name + repoCount + " value"); // Concatenation (This is not good practice)

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Template literals (This is good practice)

 
// another type to declaire string is using String constructor
const gameName = new String('contra-dk');

console.log(gameName[0]); // C (due to the fact that gameName is an object, we can use string methods on it)
console.log(gameName.__proto__); // String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}


 //console.log(gameName.length); // 6 (length property is available on string objects)
 //console.log(gameName.toUpperCase()); // CONTRA (toUpperCase method is available on string objects)
 console.log(gameName.charAt(2)); // n (charAt method is available on string objects)
 console.log(gameName.indexOf('n')); // 2 (indexOf method is available on string objects)


const newString = gameName.substring(0, 4); // substring method is available on string objects and last two characters are not included in the new string(in this -ve value ignore and start from the 0) 
console.log(newString); // cont (substring method is available on string objects and last two characters are not included in the new string)

const anotherString = gameName.slice(-8, 4) // slice method is available on string objects and last two characters are not included in the new string -ve value also works in slice method

console.log(anotherString); // the output is "ont " because the slice method takes the start index and end index as arguments and returns the substring from start index to end index (not including end index). In this case, the start index is -8 which means 8 characters from the end of the string and the end index is 4 which means 4 characters from the start of the string. So, it returns the substring from 8th character from the end to 4th character from the start which is "ont ".

const newStringOne ="   divyanshu   "
console.log(newStringOne); // "   divyanshu   " (the string has whitespace at both ends)
console.log(newStringOne.trim()); // trim method is available on string objects and it removes the whitespace from both ends of the string

const url = "https://www.divyanshu.com/divyanshu%20kumar"

console.log(url.replace('%20', '-')); // replace method is available on string objects and it replaces the first occurrence of the specified value with the specified value. In this case, it replaces '%20' with '-' and returns the new string.

console.log(url.includes('divyanshu')); // includes method is available on string objects and it checks if the specified value is present in the string. In this case, it checks if 'divyanshu' is present in the url and returns true.

console.log(url.includes('shiva')); // if shiva is not present then it give false

console.log(gameName.split('-')); // split method is available on string objects and it splits the string into an array of substrings based on the specified separator. In this case, it splits the string 'contra-dk' into an array of substrings ['contra', 'dk'] based on the separator '-'.

