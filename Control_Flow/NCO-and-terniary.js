// Nullish Coalescing Operator (??) : null undefined

// This operator is specially used , when any function is returned null or undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 20
// val1 = undefined ?? 20
val1 = null ?? 10 ?? 20


console.log(val1);


//Terniary Operator

// Syntax : 
    // condition ? true : false

const iceTeaPrice = 100

iceTeaPrice<=80 ? console.log("Less than 80") : console.log("more than 80");//