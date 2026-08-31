class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password} divyanshu`
    }

    set password(value){
        this._password = value
    }
}

const divyanshu = new User("d@divyanshu.ai", "abc")
console.log(divyanshu.email);
