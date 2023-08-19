const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((acc, currval) => {
//   console.log(`acc : ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 6);

//reduce is basically a method when we need single value from an all element of array(eg max,min,diff,avg,sum etc)

//reduce passes two arguements one function(which includes accumulator and intial value as arguement itself) and another intial value of accumulator.

const myTotal = myNums.reduce(
  (acc, currval) =>
    // console.log(`acc : ${acc} and currval: ${currval`); acc + currval;
    acc + currval,
  6
);
console.log(myTotal);
console.log("##################");

const shoppingCart = [
  {
    itemName: "js",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev",
    price: 6999,
  },
  {
    itemName: "data Science",
    price: 7999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);

console.log("##################");
const arr = [5, 1, 4, 5, 6];
//summ
// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);

//max

const output = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output);
