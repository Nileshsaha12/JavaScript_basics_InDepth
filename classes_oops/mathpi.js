const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name : "chai",
    price: 250,
    isAvailabe : true,
    orderChai : function(){
        console.log("halulu");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name", {
    //writable:false,
    enumerable:false,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        //name is not iterable in the object
        console.log(`${key} : ${value}`);
    }
}