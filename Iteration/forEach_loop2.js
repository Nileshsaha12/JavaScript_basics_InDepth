const coding = ["js","py","java","c","rb","swift"]


// forEach loop does not return anything

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// } )

// console.log(values);


//filter
// filter always return some values
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// } )



// console.log(newNums);

const books = [
    { title:"book one" , genre:"Science", publish:2009, edition:2014},
    { title:"book two" , genre:"Friction", publish:1982, edition:2019},
    { title:"book three" , genre:"History", publish:1991, edition:2001},
    { title:"book four" , genre:"Non-Friction", publish:1965, edition:1999},
    { title:"book five" , genre:"History", publish:1995, edition:2009},
    { title:"book six" , genre:"Science", publish:2001, edition:2001}
]


const UserBooks = books.filter( (bk) => {
    return bk.genre === 'History'
})

const userYear = books.filter((bk) => {
    return bk.publish>1990 && bk.genre ==='History'

})

// console.log(UserBooks);
console.log(userYear);