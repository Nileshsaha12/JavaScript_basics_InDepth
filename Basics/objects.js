// In js , we can declear object in two different ways - 
        // (1) Literal and (2) Constructor

//singleton

//When we create objects by using constructor , then singleton object  is created (it means it is the object of only one type)

//If we create objects by using literals , it will not be singleton (it will make many instances of it)



// object literals

const mySym = Symbol("key1")

const user = {
    name : "nilesh",// keys always are accepted as string
    age :18 ,
    "full name" : "Nilesh Saha",
    [mySym] : "mykey1",// now we are refering the above symbol
    location: "Nabadwip",
    email : "nilesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saterday"]
}

//console.log(user.email);// don't need to call the key as string, mostly used
//console.log(user["email"]);// this is suggest to user for better experience
//console.log(user["full name"]);// keys are called as string

//console.log(user[mySym]);// for access symbols in object we don't need to use "" or double quotes

//console.log(typeof user[mySym]);

user.email = "nilesh23@gmaigeae" // we use (=) to change some value in the object

// Object.freeze(user) // now , we can't be able make any change in the object
user.email = "gargee.com"
 // console.log(user);

user.greeting = function(){
    console.log("hi! sexy");
}
user.greetingtwo = function(){
    console.log(`hi! sexy ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingtwo());
console.log(user);