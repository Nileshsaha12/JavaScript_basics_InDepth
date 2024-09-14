//array


// Arrays in js can be contain multi- datatyes in a single array


// Shallow copies

// A shallow copy of an object is a copy whose properties share the same references as those of the source object

//Deep copies

//// A deep copy of an object is a copy whose properties do not share the same references as those of the source object


//// js array-copy operation create shallow copies.
// means if we make any change in it , it will directly the original copy of the array object


const myarr = [0,1,2,3,4,5]
const myHeros = ["hulk" ,"iron man"]
const ex1 = [0,1, 3, 5, true,"nilesh" ,'s']

const arr = new Array(1,2,3,4,)
console.log(myarr[0]);

//methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(9)//this is not optimiced, used to insert element at first index
// myarr.shift()//used to remove element from first index

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));

const newarr = myarr.join()//make the array into string

console.log(typeof ex1); // arrays are consider as object in js

console.log(myarr);
console.log(typeof myarr);

// console.log(typeof myHeros);

console.log(newarr);
console.log(typeof newarr);


// slice , splice

console.log("A " , myarr);

const sl1 = myarr.slice(1,3)
console.log(sl1);
console.log("B " , myarr);

const sl2 = myarr.splice(1,3)
console.log(sl2);
console.log("C " , myarr);
 //
// In slice , the main array in remains same and slice the elements from the given indeices
//In splice ,  the elements are removed from the main array object , and the main array only contains the remaining elements

