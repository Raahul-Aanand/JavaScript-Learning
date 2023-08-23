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

function fetchData(url, callback) {
  // Simulate a network request
  setTimeout(() => {
    const data = { result: "Some data" };
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log("Received data:", data);
}

fetchData("https://example.com/api/data", handleData);

const originalObject = { a: 1, b: { c: 2 } };
console.log(originalObject);
const shallowCopy = { ...originalObject };
console.log(shallowCopy);
