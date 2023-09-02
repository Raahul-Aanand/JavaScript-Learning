//debounce in js

//debouncing is a technique used to control how often a particular function is executed
//in case where that function triggered rapidly and repeatedly such as in response to user input

/*
 *debouncing aims to solve such problem where a function called too frequently which can lead to unnecessary resource usage or unintended behaviour
 */

//it helps us to optimizd how we call a certain event

let counter = 0;
const getData = () => {
  console.log("fetching data", counter++);
};

const doSomeMagic = function (func, delay) {
  return function () {
    let timer;
    let context = this,
      args = arguements;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const betterFunction = doSomeMagic(getData, 300);
