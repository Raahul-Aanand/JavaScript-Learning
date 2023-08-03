const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((acc, currval) => {
//   console.log(`acc : ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 6);

const myTotal = myNums.reduce(
  (acc, currval) =>
    // console.log(`acc : ${acc} and currval: ${currval`); acc + currval;
    acc + currval,
  6
);
console.log(myTotal);

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
