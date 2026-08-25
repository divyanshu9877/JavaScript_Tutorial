// let myName = "divyanshu   "
// let mychennel = "chai   "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }

}

Object.prototype.divyanshu = function(){
    console.log(`divyanshu is present in all objects`);
    
}

Array.prototype.heyDivyanshu = function(){
    console.log(`Divyanshu says hello`);
    
}

// heroPower.divyanshu()
// myHeros.divyanshu()
// myHeros.heyDivyanshu()
// heroPower.heyDivyanshu()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssingnment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
    
}

anotherUsername.trueLenght()
"divyanshu".trueLenght()
"iceTea".trueLenght()