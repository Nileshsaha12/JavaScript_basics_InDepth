class user {
    constructor(username){
        this.username= username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return "123";
    }
}

const nilu = new user("nilesh")
// console.log(nilu.createId());
console.log(user.createId());

class Teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const rifa = new Teacher("rifa","rifa@gmail.com");
rifa.logMe();
// console.log(rifa.createId());