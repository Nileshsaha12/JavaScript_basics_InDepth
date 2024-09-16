const coding = ["js","py","java","c","rb","swift"]

// callback functions does not have names
// coding.forEach( function (item) {
//     console.log(item);
// } )


//By using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item,index,arr) => {
//     console.log( item ,index ,arr);
// })


const myCoding = [
    { 
        languageName : "javascript",
        languageFileName : "JS"
    },
    { 
        languageName : "Python",
        languageFileName : "PY"
    },
    { 
        languageName : "Java",
        languageFileName : "JAVA"
    }
]

myCoding.forEach( (item,index) => {
    console.log(item, index);
})