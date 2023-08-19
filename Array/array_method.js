//push Method

const fruits = ["apple", "banana"];
fruits.push("orange", "grape");

// console.log(fruits);
// fruits.pop();
// console.log(fruits);

fruits.unshift(0); // new element ko first index pe push karta hai
// console.log(fruits);

fruits.shift(); //ye first element ko remove karta hai

// console.log(fruits);

// console.log(fruits.includes("orange")); //return true or false

const newArr = fruits.join(); //convert array to string
// console.log(fruits);
// console.log(typeof newArr);

//slice and splice

//slice :- it does not modify the array isme last parameter print nahi hota
// console.log("A", fruits);

const myNarr1 = fruits.slice(1, 3);

// console.log(myNarr1);
// console.log("B", fruits);

//splice:- it does modify the original array isme last parameter bhi print hota ae

const myNarr2 = fruits.splice(1, 3);
// console.log("c", myNarr2);
// console.log("d", fruits);

const heroes = ["thor", "Ironman", "spoderman"];
const dc = ["superman", "flash", "batman"];

// heroes.push(dc);
// console.log(heroes);

// console.log(heroes[3]);

const allHeroes = heroes.concat(dc);
// console.log(allHeroes);

//spread operator

const all_newheroes = [...heroes, ...dc];
// console.log(all_newheroes);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

//flat method:- it creates a new array by flattening a nested array flat(depth) //depth means kitta andar jana hai array ke andar

const another_array = arr.flat(Infinity);
console.log(another_array);

console.log(Array.isArray("Rahul"));
console.log(Array.from("rahul"));

//From method convert passing parameter into a new array

console.log(Array.from({ name: "rahul" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

//Of:- returns a new array from set of elements
console.log(Array.of(score1, score2, score3));

const users = [
  { firstName: "Rahul", lastName: "Anand", age: 26 },
  { firstName: "Donald", lastName: "Trump", age: 77 },
  { firstName: "Deepika", lastName: "Padukone", age: 26 },
  { firstName: "Abhishek", lastName: "Singh", age: 24 },
];

//list of fullName
// ["rahul Anand",donald Trump]

const output = users.map((x) => {
  return x.firstName + " " + x.lastName;
});
console.log(output);

const output2 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output2);
