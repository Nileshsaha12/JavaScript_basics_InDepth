// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());


// console.log(typeof myDate); //object


// let myCreatedDate = new Date(2023,0,24)
// let myCreatedDate = new Date(2023,0,24, 5, 33)
 let myCreatedDate = new Date("2023-01-22")
//  let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTImeStamp = Date.now()

// console.log(myTImeStamp);// time in milisecond from 1st jan 1970 to till now

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));// Converted into seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{
    weekday:'long',
}));//we can adjust this type of things in our toLocaleString method