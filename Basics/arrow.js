const user = {
    username : "nilesh",
    price :999,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);// this will print all the contexts of the present object
    }
}

// user.welcomeMessage()
// user.username = "rifa"
// user.welcomeMessage()

// console.log(this);// this will return a empty object

//If we run the above line in browser , it will return the window object 
// because , window object is the global object in browser

// function one() {
//     let username = "nilesh"
//     console.log(this.username); // we can't use this in the funtion scope
// }

// one()

// const one = function(){
//     let username = "nilesh"
//     console.log(this);
// }
const one = () =>{
    let username = "nilesh"
    console.log(this);
}

 one()

// const addnums = (num1 , num2) => {
//     return num1 + num2 // explict return
// }

// const addnums = (num1 , num2) =>  num1 + num2

const addnums = (num1 , num2) =>  (num1 + num2) //Implecit return

//In {} we need to write return , but in () we don't need to write return


// console.log(addnums(3,5));

const myArray = [2,5,3,7,8]

// myArray.forEach()