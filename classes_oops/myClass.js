//ES6

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return (`${this.password}abc`);
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const nilesh = new user("nilesh","nilesh@mail.com","123");
console.log(nilesh);
console.log(nilesh.encryptPassword());
console.log(nilesh.changeUsername());



//Behind the scene

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const rifa = new User("rifa","mylove@gmail.com","hot")

console.log(rifa);
console.log(rifa.encryptPassword());
console.log(rifa.changeUsername());
