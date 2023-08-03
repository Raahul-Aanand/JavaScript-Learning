//Arrow Function(ES6)

//Special Type of function expression
//It allows us to write function more fast because
//No need to use function keyword
//No need to use parenthesis In case of single Parameter
//No need to use curley{} if single line of  code in function
//No need to use return statement if single line code in function

//Function Expression
// const invitation = function(name){
//   console.log(`Welcome ${name} to this event`);
// }

// invitation("harry");

//Arrow function

const invitation = (name) => `Welcome ${name} to this event`;

// console.log(invitation("coders"));

function sum(a, b) {
  return a + b;
}
//Arrow Function

const sumA = (a, b) => a + b;

// console.log(sum(2, 3));
// console.log(sumA(2, 3));

const sumB = (a, b) => {
  a = 2 * a;
  return a + b;
};

// console.log(sumB(2,2));

const sumc = (a, b, c) => a + b + c;

// console.log(sumc(1,2,3));

//this refers to current context means value

const user = {
  userName: "rahul",
  price: 1000,
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.userName = "harryBrook"
// user.welcomeMessage()

// console.log(this);

// function coffee() {
//   let userName = "rahul";
//   console.log(this.userName);
// }
// coffee();

const coffee = () => {
  let userName = "rahul";
  console.log(this);
};

// coffee();

//implicit return
//on using curly braces we use return keyword

//const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => num1 + num2;

//for returning object we use parenthesis then curly braces

const addTwo = (num1, num2) => ({ userName: "rahul" });

console.log(addTwo(2, 3));

const myArrray = [2, 3, 4, 5, 6];

// myArrray.forEach(()=>())
