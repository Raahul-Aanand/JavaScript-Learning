//filter method is used to create new array containing element that pass a certain condition

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.filter((num) => num > 4);
//console.log(newNums);

const fruits = ["apple", "banana", "orange", "grape", "apple"];

//when we use scope in arrow function we use return key

const apples = fruits.filter((fruit) => {
  return fruit === "apple";
});

const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

// console.log(apples);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1996 && bk.genre === "History";
});

console.log(userBooks);

const users = [
  { firstName: "Rahul", lastName: "Anand", age: 26 },
  { firstName: "Donald", lastName: "Trump", age: 77 },
  { firstName: "Deepika", lastName: "Padukone", age: 26 },
  { firstName: "Abhishek", lastName: "Singh", age: 24 },
];

const output = users
  .filter((user) => {
    return user.age < 30;
  })
  .map((user) => {
    return user.firstName;
  });

console.log(output);

const output1 = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output1);
