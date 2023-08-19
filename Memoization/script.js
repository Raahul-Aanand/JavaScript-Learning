//Memoization is an optimization technique that can be used to reduce time-consuming calculation by saving previous input to something called cache and returning result from it

//It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again.

let sum = 0;
const calculation = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//caching

const memoization = (fun) => {
  let cache = {};

  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      console.log(cache);
      return cache[n];
    } else {
      console.log("calc first time");
      let result = calculation(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
const opti = memoization(calculation);
console.log(opti(7));
console.timeEnd();
// console.log(calculation(6));
console.time();
// console.log(opti(8));
console.log(opti(7));
console.timeEnd();
