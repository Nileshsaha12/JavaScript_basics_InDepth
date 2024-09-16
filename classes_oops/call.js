function setUsername(username){
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const user1 = new createUser("nilesh","nilu@gmail.com","13234");
console.log(user1);