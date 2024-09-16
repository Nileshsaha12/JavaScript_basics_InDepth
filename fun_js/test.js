const myArr = []

// %DebugPrint(myArr)

// array are two types in JS -- 
// (1) continious , (2) Holey

//SMI (small integer) 
//Packed element
//Double(float, string, function)


let arrayTwo = [1,2,3,4,5]
//Packed_SMI_Elements

arrayTwo.push(6.1)
//Packed_DOUBLE_Elements

arrayTwo.push('7')
//Packed_Elements

arrayTwo[10]=11
//Holey_Elements

console.log(arrayTwo);
console.log(arrayTwo.length);
console.log(arrayTwo[9]);

//steps to find element to a particular position in array

//(1) Bound check
//(2) hasOwnProperty(arrTwo, 9 )
//(3) hasOwnProperty(arrTwo.prototype, 9)
//(4) hasOwnProperty(Object.prototype, 9)

// holes are very expensive in js ,
// because hasOwnProperty check is one of the most expensive check in JS

const arrThree = [1,2,3,4,5]
console.log(arrThree[3]);

//Optimization level

//SMI> DOUBLE> PACKED > H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '3' //HOLEY_ELEMENTS


// Optimized
const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS


const arrSix =[1,2,3,4,5]

arrSix.push(Infinity)// PACKED_DOUBLE_ELEMENTS
arrSix.push(NaN)// PACKED_DOUBLE_ELEMENTS
console.log(arrSix);
