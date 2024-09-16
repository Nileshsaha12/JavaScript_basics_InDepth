const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc,currval) => {
    // console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0 )

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS course",
        price :2999
    },
    {
        itemName: "python course",
        price :1999
    },
    {
        itemName: "Java course",
        price :999
    },
    {
        itemName: "App devcourse",
        price :12999
    }
]

const total = 0

const totalCal = shoppingCart.reduce( (acc,item) => {
    return acc + item.price;
},total )

console.log(totalCal);