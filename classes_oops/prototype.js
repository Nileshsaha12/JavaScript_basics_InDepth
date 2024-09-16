// const myname = "nilesh     ";
// const channel = "gargee   "

// console.log(myname.truelength);


let myHeros = ["thor","superman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.nilesh = function(){
    console.log("nilesh is here");
}

Array.prototype.heynil = function(){
    console.log("nilesh says hello");
}

// heroPower.nilesh()
// myHeros.nilesh()
// myHeros.heynil()
// heroPower.heynil()

//inheritance


const user = {
    name : "nilesh"
}

const teacher = {
    makeVideo :true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "js",
    fullTime: true,
    __proto__:teachingSupport
}

teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingSupport,teacher)


let anothername = "rifa    "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anothername.truelength()

"nilesh    ".truelength()
"gargee".truelength()