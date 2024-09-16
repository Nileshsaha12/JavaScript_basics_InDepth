// If we don't know the inputed number of values

function calculateCartPrice(val1, val2, ...num1) {
  // Here , ... known as rest
  return num1;
}

//val1 = 3
//val2 = 54
//...num1 = stores other all values that passes in the arguments

// console.log(calculateCartPrice(3,54,5,643,543,356,900));

const user = {
  username: "nilesh",
  price: 299,
};

function handleObject(anyobject) {
  console.log(
    ` username is ${anyobject.username} and price is ${anyobject.price}`// keys of the object name must be matched
  );
}

// handleObject(user);
handleObject({
    username : "sam",
    price : 299
})

const myArr = [200,430,36366]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([6453,3445,6544,34]));