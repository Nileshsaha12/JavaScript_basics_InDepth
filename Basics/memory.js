/* Memories are two types - (1) Stack
                            (2) Heap
*/

// Primitive datas are stored in stack
// Non-Primitive datas are stored in heap

// When stack memory is used, we have a copy of the decleared data

// When memory is defined in  the heap, we have the reference of the original value
// if we change something in the reference , it will directly change in the original value

let myname = "Nilesh" // stored in stack

let anothername = myname
anothername = "Gargee"

console.log(myname);
console.log(anothername);

let userone = {
    email:"user@gmail.com",
    upi:"user@ypl",
}

let usertwo = userone

usertwo.email="gargee@gmail.com"

console.log(userone.email);
console.log(usertwo.email);