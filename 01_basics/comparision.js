// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 !=1 );


 //console.log("2" > 1) // true => string is converted to number => 2 > 1 => true
 //console.log("02" > 1) // true => string is converted to number => 2 > 1 => true

console.log(null > 0) // false => null is converted to number => 0 > 0 => false
console.log(null == 0) // false => null is not converted to number => null is only equal to undefined   
console.log(null >= 0) // true => null is converted to number => 0 >= 0 => true
 //console.log(undefined > 0) // false => undefined is converted to number => NaN > 0 => false
 // conslole.log(undefined == 0) // false => undefined is not converted to number => undefined is only equal to null
 // console.log(undefined >= 0) // false => undefined is converted to number => NaN >= 0 => false
 // consloe.log(undefined == null) // true => undefined is only equal to null


 // ===  ( strict equality => checks value and type )
 // ==  ( loose equality => checks value only )

 console.log(1 === 1); // true => same value and type
 console.log(1 === "1"); // false => same value but different type
 console.log(1 == "1"); // true => same value but different type => string is converted to number => 1 == 1 => true

