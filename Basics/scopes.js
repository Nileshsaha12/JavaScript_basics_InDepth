// {} , this is know  as scope in js expect of in use of object


//below the code we understand that why we mainly avoid 'var'
var c = 300//global scope 
if (true) {
    //block scope or local scope(only valid inside the scope)
  let a = 10;
  const b = 20;
  var c = 30;// this is value is present in outside of the scope , that's the problem of var in js
}

// console.log(a);
// console.log(b);
console.log(c);

let d = 304
if(true){
    let d = 32
    console.log(`Inner : ${d}`);
}

console.log(d);



