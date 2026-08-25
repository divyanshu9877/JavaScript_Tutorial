class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const divyanshu = new User("divyanshu")
// console.log(divyanshu.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const samsung = new Teacher("samsung", "samsung@phone.com")
// samsung.logMe();
console.log(samsung.createId());

// it give something but that is not error