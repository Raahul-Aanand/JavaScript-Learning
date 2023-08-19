// const multiply = function (x, y) {
//   console.log(x * y);
// };

//currying allows us to break down a multiple argument function into sequence of single argument

//we can perform currying by bind method and through closer

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
const res = addition(2)(4)(5);
console.log(res);
