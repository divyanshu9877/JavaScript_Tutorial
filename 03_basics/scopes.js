// var c = 300 // var not in use 
let a = 300                   // the value outside the { } are called global scope
 // {} => this symbol is scope
 if (true) {               // the value inside the { } are called block scope
    let a = 10
    const b =20
    console.log("INNER: ", a);

 }

 

console.log(a);
// console.log(b);
// console.log(c);