
//function declearation
function sayMyName(){
    console.log("N");
console.log("I");
console.log("L");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()


// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result

    return number1 + number2
}



const result = addTwoNumbers(2,3)//arguments
// console.log(result);

// function loginuser(username){
//     if(!username){//undefined values are always taken as false in js
//         console.log(`please enter a username`);
//         return
//     }
//     return `${username} just logged in`
// }

function loginuser(username = "rifa"){// Now, default value of the username is "rifa", if we enter some input it will simply override the value
    if(!username){// it will never be executed
        console.log(`please enter a username`);
        return
    }
    return `${username} just logged in`
}

// console.log(loginuser("nilesh"))
console.log(loginuser())