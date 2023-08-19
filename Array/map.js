//maps object hold key value pair unique values

// const map = new Map();
// map.set("In", "India");
// map.set("USA", "United states of America");

// //console.log(map);

// for (const [key, value] of map) {
//   //   console.log(key, ":-", value);
// }

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => num + 10);

//chaining :- jab bhi chaining hoti hai iska jo bhi result hai wo second me pass ho jayega

// // const newNums = myNumbers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);

// console.log(newNums);

//map function creates a new array iterrating over each element of an array and returns new array as output

//map function is basically used to transform an array

const arr = [5, 4, 3, 2, 6];

const output = arr.map(binary);

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}
console.log(output);
