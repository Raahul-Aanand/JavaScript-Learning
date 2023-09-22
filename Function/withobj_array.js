function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 600, 700, 800));

//rest operator :- it is used to collect mutliple function arguement into an array (...)
//collecting remaining element in an array destructuring

const user = {
  username: "rahul",
  price: 199,
};

function handleObject(anyobject) {
  console.log(`username is ${object.username} and price is ${anyobjectprice} `);
}

//handleObject(user);

handleObject({
  username: "harry",
  price: 399,
});

const myArr = [200, 400, 600, 100];

function returnSecondValue(getArray) {
  return getArray[2];
}

console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200, 400, 100, 800]));
