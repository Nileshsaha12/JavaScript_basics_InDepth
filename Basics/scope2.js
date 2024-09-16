//nested scope

function one (){
    const username = "nilesh"

    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "nilesh"
    if(username == "nilesh"){
        const website = "youtube"
        // console.log(username + website);

    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++ interesting ++++++++++++++++++++++++

// JS variables are very strong it can hold any values

addone(5)// it will not give error

function addone(num) {
    return num + 1
    
}

addtwo(5) // it will thorw error (it is depends on how we create functions)
const addtwo = function (num) { // this is called expression
   return num+2
    
}