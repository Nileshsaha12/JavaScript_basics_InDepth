// Immediately Invoked Function Expressions (IIFE)

// Soemtimes we are faced problem for global pollution,
// For reduce the pollution which are occur due to declearization of global variables, we use IIFE

// In IIFE , we immediately call the function to reduce any pollution relation problem

(function one(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //simple IIFE or unnamed IIFE
    console.log(`DB CONNECTED TO ${name}`);
} )("nilesh")