// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
 console.log(2==1);
// console.log(2!=1);

console.log( "2" > 1);
console.log("02" > 1);

console.log(null>0);
console.log(null == 0);
console.log(null >= 0);

/*The reason is that an equality check == and 
comparisons > < >= <= work differently.
Comparisons convert null to a number , treating it as 0.
That's why (3) nul>=0 is true and (1) null>0 is false
*/

console.log(undefined==0);

//=== (strictly check)

console.log("2" == 2);
console.log("2" === 2);//=== used to check the values as well as the datatypes , it doesn't change the datatype