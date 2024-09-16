// Object De-structure in js

const course = {
    coursename : "JS",
    price : "free",
    teacher : "hiteshbabu"
}

// course.teacher

const {teacher : newNameOfTeacher}  = course // there  , i change the name of techer key

// console.log(teacher)
console.log(newNameOfTeacher);

//used in react
// const navbar = ({company}) => {


// }

// navbar(company = "nilesh")


//json 

// {
//     "name" : "nileesh",
//     "coursename" : "js",
//     "price" : "free",
// }

// eveny api are in json format

//json => java script object notation

