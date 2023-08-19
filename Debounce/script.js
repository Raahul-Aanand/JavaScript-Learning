//debounce in js
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
