// if

// if(condition){

// }

// const isUserloggedIn = true

// if(isUserloggedIn){
    //code
// }

//comparison operators 

//< , > , <= , >=, == , !=, === ,!==


// const temp = 11
// if(temp === 11){
//     console.log("It's very cold");
// } else{
//     console.log("normal");
// }

// console.log("must be executed");


// const score = 200

// if(score >100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

// shorthand notation
// const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");// not good practice

// if(balance<500){
//     console.log("Less than 500");
// }else if(balance<750){
//     console.log("Less than 750");
// }else if(balance<900){
//     console.log("Less than 900");
// }else{
//     console.log("sexy!");
// }


const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserloggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}