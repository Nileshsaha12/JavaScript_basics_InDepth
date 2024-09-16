class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const nilesh = new Teacher("nilesh","nilsh@gmail.com","123");
nilesh.addCourse()

const rifa = new user("rifa");
console.log(rifa);
rifa.logMe();
nilesh.logMe();