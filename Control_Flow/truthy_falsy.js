// In JS some values are already assume as true or false

// Those assumed true values are known as truthy value.

//Those assumed false values are known as falsy value.

const userEmail = []

if(userEmail){
    console.log("Get It");
}else {
    console.log("Fuck it");
}


// Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values

// All other values are called thruthy values..
// "0" ,'false', " ", [], {}, function(){} etc

// if(userEmail.length === 0){
//     console.log("Empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}