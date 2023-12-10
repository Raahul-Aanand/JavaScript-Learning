/*

 *Throttling => it is a technique in which no matter how many times the user fires the event,the attached function will be executed only once in a given time interval

 * difference between throttling and debouncing is that throttling executes the function at regular interval,
 *while debouncing executes the function after some cooling period of time 

 */

const myInput = document.getElementById("input-event");

function throttle(func, delay) {
  let timeout = null;
  console.log(timeout);
  return function (...args) {
    if (timeout === null) {
      func.call(this, ...args);
      timeout = setTimeout(() => {
        console.log(timeout);
        timeout = null;
      }, delay);
    }
  };
}
const findElements = (e) => {
  console.log(e.target.value);
};

const throttleFunc = throttle(findElements, 300);

myInput.addEventListener("input", throttleFunc);
