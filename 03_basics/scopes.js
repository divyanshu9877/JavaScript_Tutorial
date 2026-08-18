// var c = 300 // var not in use 
let a = 300                   // the value outside the { } are called global scope
 // { } => this symbol is scope
 if (true) {               // the value inside the { } are called block scope
    let a = 10
    const b =20
   // console.log("INNER: ", a);

 }



// console.log(a);  // it give 300 output
// console.log(b);
// console.log(c);



// nested Scope => ek function me dusra function  ( child ke function parent variable ko access kar sakte hai )
function one(){
    const username = "divyanshu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "divyanshu"
    if (username === "divyanshu"){
        const website = " youtube"
       // console.log(username + website);
    }
    // console.log(website);  // error remove
}

// console.log(username);  // error remove


//+++++++++++++++++++ Intrusting ++++++++++++++++


console.log(addone (5))  // is case me use kar sakte hai because function ke andar value assign nhi hai function addone(num)

function addone(num){
    return num + 1
}


// addTwow (5)  // it give error because value defined not working ( declaration se pehle nhi use kar sakte hai ) const addTwo = function(num)
const addTwo = function(num){
    return num + 2
}

addTwo (5)