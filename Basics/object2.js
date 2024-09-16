// Object created by using constructors

const tinderuser = new Object()

tinderuser.id = "12f3"
tinderuser.name = "gargee"
tinderuser.isLoggin = false

// console.log(tinderuser);

const regularuser ={
    email : "some@gmail.com",
    fullname :{
        userfullname:{
            firstname: "Nilesh",
            lastname: "Saha"
        },
        newname:{
            firstname: "Rifa",
            lastname: "Saha"
        }
    }
}

// console.log(regularuser.fullname.newname.firstname);

const obj1 ={
    1:"a",
    2: "b"
}


const obj2 ={
    3:"c",
    4: "d"
}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}/*it is a optional parameter*/ , obj1,obj2)// it will definatly return a object
const obj3 = {...obj1,...obj2}
// console.log(obj3);


//values came from database like this , as a array of objects
const users = [
    {id :1,
        email:"rssdsvd"
    },
    {id :2,
        email:"fssfdsddsvd"
    },
    {id :3,
        email:"svdsdfeefededf"
    }
]

// console.log(users[1].email);

console.log(tinderuser);
console.log(Object.keys(tinderuser));// here , we make a array of the keys in the object
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));// it will returns all key-value pairs as array

console.log(tinderuser.hasOwnProperty("isLggin"));
