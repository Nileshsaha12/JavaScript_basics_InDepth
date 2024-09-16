let score = "33";

console.log(typeof score);
//console.log(typeof(score));//used as a method

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

let sc = "33sfsf";
console.log(typeof sc);
let scnumb = Number(sc);
console.log(typeof scnumb);
console.log(scnumb); //return NaN , means not a number

//"33" => 33
// "33abc" => NaN(Not a Numebr)[but type of NaN is number it is little bit confusing]
// true => 1; false => 0
// null => 0

let isLoggedin = 1

let booleanLoggedIn=Boolean(isLoggedin)

console.log(booleanLoggedIn);

// 1 => true; 0 => false
//"" => false
//"Nilesh" => true

let any = 33

let Stringnub=String(any)
console.log(Stringnub);
console.log(typeof Stringnub);

//browser maximum time return value as string 
