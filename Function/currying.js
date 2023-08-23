// const multiply = function (x, y) {
//   console.log(x * y);
// };

//currying allows us to break down a multiple argument function into sequence of single argument

//we can perform currying by bind method and through closer

//currying is a function that takes one arguement at a time and returns a new function expecting the next arguement.

//it is conversion of functions from callable as func(a,b,c)
//into callable as f(a)(b)(c)

//currying doesnt call a function it just transform a function they ar constructed by chaining closure and immediately return inner function simultaneously

const mult = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

// const multiplyByTwo = multiply.bind(this, 2, 3);
const multiplyByTwo = mult(3);
console.log(multiplyByTwo);
multiplyByTwo(5);

// const multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(4);

function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = addition(4);
console.log(result);
const data = result(5);
console.log(data);
const data1 = data(5);
console.log(data1);
const res = addition(2)(4)(6);
console.log(res);

//why should currying used
//it makes function pure which means it gives less error
//to avoid using same variable again and again
//it is a checking method that checks if u=you have all the things before you proceed
//it divides one function into multiple function so that on can handle one set of responsibility

//How does currying works
//currying is a function that takes multiple arguement as input.
//it transforms the function into a number of function where every function will accept one arguement

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(1, 2, 3));

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(5)(6));

//evaluate("sum")
//evaluate multiply
//evaluale divide
//evaluate substract

function eval(operation) {
  return (a) => {
    return (b) => {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "subtract") return a - b;
      else return "No / Invalid Operation Selected";
    };
  };
}

console.log(eval("sum")(5)(6));
console.log(eval("multiply")(4)(7));

const mul = eval("multiply");
//here we reuse our variable
console.log(mul(4)(5));

//infinite currying
//sum(a)(b)(c)...(n);
