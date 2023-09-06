//spread operator is used to expand elements of arrays,objects or function arguements.

//its like unpacking the content of a container and spreading them out.

//arrays

const numbers = [1, 2, 3, 4, 5, 6];

const expandedNum = [...numbers, 7, 4, 6];

console.log(expandedNum);

const numbers1 = [1, 2, 3, [4, 5, 6]];
console.log(...numbers1);

//with objects

const person = {
  name: "rahul",
  age: 24,
};

const unpackedPerson = { ...person, city: "Chandigarh" };
console.log(unpackedPerson);

//Rest Operator

//rest operator is used to gather remaining elements into an array or objects,

//collecting things together into a single container

function sum(...num) {
  let total = 0;
  for (const elements of num) {
    total += elements;
  }
  return total;
}

console.log(sum(1, 2, 3));

//with destructuring

const [first, ...rest] = [1, 2, 4, 5, 7, 8];

console.log(first);
console.log(rest);

//spread operator:- expanands elements of array,objects or function arguementts

//rest:collects elements of array or function arguments into container
