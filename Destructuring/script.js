//it is a technique that allows you to extract values from array or object and assign them to a variable in a more concise way

//its a way to unpack values from ds like array and objects into separate variable

//example
//we use square bracket '[ ]' on left side of an assignment.

//order of variables matters here
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const [first, second, third, forth, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(forth);
console.log(rest);

//destructuring of object
//we can destructure objects by using curly braces{ } on the left side of an assignment. variable names must match the property names in objects

const person = {
  name: "rahul",
  age: 24,
  job: "frontend-Engineer",
  userId: "rahul123",
  pass: 123,
};

const { name, age, ...rest1 } = person;
console.log(name);
console.log(age);
console.log(rest1); //return object because

//we can also rename variable while destructuring objects
//by using ':' syntax

const user = {
  firstName: "rahul",
  lastName: "Anand",
};

const { firstName: fname, lastName: lname } = user;

console.log(fname);
console.log(lname);

//We can set default values for variable in case property is missing

console.log("______________________");
const student = {
  Name: "Abhishek",
};

const { Name, Age = 25 } = student;

console.log(Name);
console.log(Age);
console.log("++++++++++++++++++");
//Destructuring function parameter

function printDetail({ userName, age = 25 }) {
  console.log(`Hello,${userName} and his age is ${age}`);
}

const user1 = {
  userName: "rahul",
};

printDetail(user1);
