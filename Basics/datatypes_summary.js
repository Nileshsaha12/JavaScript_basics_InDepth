/* In the basis of how data is stored in the memory and how accessed ,
datatypes are divided into 2 types - (1) Primitive datatypes
                                     (2) Non-Primitive datatypes
*/

//Primitive(Call by value)

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



//Integer and float all treated as Number in JS
const score=100
const scoreValue = 100.3

const isLoggedin = false
const temp = null
let userEmail;

const Id=Symbol('123')
const anotherId=Symbol('123')

console.log(Id === anotherId);

const bigNumber = 3559595959595948495595n

//JavaScript is a dynamically typed language.
//Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.


//Non-Primitive (Call by reference)

// Array, Objects, Functions

//All non-primitive datatypes types are 'object'
//but only functions are typeof 'object function'

//Array 
const heros=["shaktiman","naagraj","hulk"]

//object
let myObj = {
    name:"Nilesh",
    age:22,
}

const myFUnc = function(){
    console.log("Helloi World");
}

console.log(typeof myFUnc);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof bigNumber);
console.log(typeof Id);
