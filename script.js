// const radius = [3, 1, 2, 4];
// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };
// console.log(radius.map(area));
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// const arr = [3, 5, 7];
// arr.foo = "hello";

// for (const i in arr) {
//   console.log(i);
// }
// // "0" "1" "2" "foo"

// for (const i of arr) {
//   console.log(i);
// }
// // Logs: 3 5 7

//Callbacks

// function fetchData(url, callback) {
//   // Simulate a network request
//   setTimeout(() => {
//     const data = { result: "Some data" };
//     callback(data);
//   }, 1000);
// }

// function handleData(data) {
//   console.log("Received data:", data);
// }

// fetchData("https://example.com/api/data", handleData);

// const originalObject = { a: 1, b: { c: 2 } };
// console.log(originalObject);
// const shallowCopy = { ...originalObject };
// console.log(shallowCopy);

//closer
function createUser(name) {
  let greeting = "hi ";
  function greet() {
    return greeting + name + " is created";
  }
  return greet;
}

const welcomeJohn = createUser("John");
const welcomeJack = createUser("rahul");

console.log(welcomeJack());
console.log(welcomeJohn());

const person1 = {};

const person2 = {};

console.log(person1 == person2); //it gives false because

if ([]) {
  console.log("[] is truthy");
}

if ([] == false) {
  console.log("[] is loosely equal to false");
}

let count = 1;
function showCount(fun) {
  count++;
  console.log({ count });
}

function debounce(fun, time) {
  let id = null;
  return function (x) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(fun, time, x);
  };
}

let showCountD = debounce(showCount, 1000);
setTimeout(showCountD, 1000);
setTimeout(showCountD, 1500);
setTimeout(showCountD, 2200);
setTimeout(showCountD, 2500);
setTimeout(showCountD, 5000);

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

const luke = {
  firstName: "Luke",
  lastName: "Skywalker",
  occupation: "Jedi Knight",
};

const map = new Map(Object.entries(luke));
console.log(map);

const obj = Object.fromEntries(map);
console.log(obj);

const map1 = new Map();

map1.set("1", "String one");
map1.set(1, "This will be overwrtten");
map1.set(1, "number one");
map1.set(true, "A boolean");

console.log(map1);

console.log(obj[1] === obj["1"]);

const objAsKey = { foo: "barr" };

const obj1 = {
  [objAsKey]: "What will happen",
};
console.log(obj1);

const map2 = new Map();
map2.set(objAsKey, "What will happen?");
console.log(map2);

//A set is designed for storing a collection of unique values
//it doesn't associate values with keys. it only stores individual values.
const uniqueNum = new Set();
uniqueNum.add(1);
uniqueNum.add(2);
uniqueNum.add(2);
uniqueNum.add(3);

console.log(uniqueNum);
console.log(uniqueNum.has(1));
console.log(uniqueNum.size);
console.log(uniqueNum.delete(3));
console.log(uniqueNum);

//A map is designed for storing key value pairs where each value associated with unique key.
//it allows you to associate data with specific identifier.
