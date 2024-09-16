const promise1 = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log('promise comsumed');
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})


const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"nilesh",email:"nilesh@gmail.com"});
    },1000)
})
promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "nilu",password : "1234"});
        }
        else{
            reject("ERROR! Something went wrong");
        }
    },1000)
})

promise4.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {//this must be executed
    console.log("either resolved or rejected");
})


const promise5 =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript",password : "1234"});
        }
        else{
            reject("ERROR! JS went wrong");
        }
    },1000)
})


async function consumePromiseFive(){
   try {
    const response = await promise5;
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()

// async function featchdata(){
//    try {
//     const response = await fetch('https://api.github.com/users/nileshsaha12');
//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//     console.log("E :" , error);
//    }
// }

// featchdata()



fetch('https://api.github.com/users/nileshsaha12')
.then(function (response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("E:" , error);
})//