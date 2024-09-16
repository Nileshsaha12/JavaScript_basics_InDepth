const name = "nilesh"
const count = 32
// this is most out dated version to concatinate strings
// console.log(name + count + " value");


//String interpolation is a great programming language feature that allows injecting variables,
// function calls, and arithmetic expressions directly into a string.

//Here we use placeholders to directly inject variables
console.log(`My name is ${name} and my body count is ${count}`);

const gameName = new String('GTA_5nilkesh_saha')
// Strings are stored in memory as a key-value pairs
console.log(gameName[0]);
console.log(name[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(5));

const newString = gameName.substring(0,4)
console.log(newString);

const another = gameName.slice(-10,8)
console.log(another);

const newone = "   nilesh   "
console.log(newone);
console.log(newone.trim());

const url = "https://nilesh.com/nilesh%20Saha"

console.log(url.replace('%20', '-'));

console.log(url.includes('gargee'));

console.log(gameName.split('_'));