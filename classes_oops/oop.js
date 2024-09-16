const user = {
    username: "nilesh",
    logincount: 7,
    signedIn: true,
    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username,logincount,isLoggedIn){
    this.username=username;
    this.logincount=logincount;
    this.isLoggedIn=isLoggedIn;

    return this;
}

// new keyword created a empty object or instance for same type

//steps-->
//(1) new empty object created
//(2) a constructor function is called for new keyword
//(3) all the values are injected to the new object
//(4) we recieve that object

const userTwo = new User("gargee",11,false);
const userOne = new User("nilesh",12,true);

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);
