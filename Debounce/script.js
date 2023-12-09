//debounce in js

//debouncing is a technique used to control how often a particular function is executed
//in case where that function triggered rapidly and repeatedly such as in response to user input

/*
 *debouncing aims to solve such problem where a function called too frequently which can lead to unnecessary resource usage or unintended behaviour
 */

/*
  It is a technique used to optize performance by limiting the function calls on different events triggers
  (Like typing event,scroll event,resize event etc)
*/

//it helps us to optimizd how we call a certain event

// Decorator functions :- Debounce is a decorator function.
// decorator function as a input takes function and it makes another function inside it and jo function hmlg pass kiye hain usko call krega and kuch other kaam bhi kar dega and return that function

//when we want to increase functionality of our function we use decorator function and decorator function is a higher order function that takes another function as an arguement. and It returns a new function that wraps around the original function(func)

// function decorator(func) {
//   return function (...args) {
//     console.log("you are calling decorated function");
//     func.call(this, ...args);
//   };
// }

// function sayHello(name) {
//   console.log("Hello", name);
// }

// const decoratedFunc = decorator(sayHello);
// decoratedFunc("Rahul");

// const input = document.getElementById("input-event");

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

//debounce takes function and delay as param

// let counter = 0;
// const getData = () => {
//   console.log("fetching data", counter++);
// };

// const doSomeMagic = function (func, delay) {
//   return function () {
//     let timer;
//     let context = this,
//       args = arguements;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// };

// const betterFunction = doSomeMagic(getData, 300);

const myInput = document.querySelector("#input-event");
// console.log(myInput);
function debounce(func, delay) {
  let timeOutId;
  console.log(timeOutId); //for understanding working of this
  return function (...args) {
    if (timeOutId) {
      console.log(timeOutId);
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
    console.log(timeOutId);
  };
}
const findSuggestions = (e) => {
  console.log("suggestion for :", e.target.value);
};

const decoratedDebounce = debounce(findSuggestions, 300);

myInput.addEventListener("input", decoratedDebounce);
