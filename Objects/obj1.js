//2 ways to declare
//Literal And Constructor
//Singleton :-When We declare objects through constructor
//Jab BHI Ham Literals ki tarah object ko declare karte hn th singleton nahi banta hai

//object.create -> isike through object constructor se banta hai

//Literals

//Symbol ko object me key ki trh use karna hai then use hum square bracket me rakhte hn

const mySymb = Symbol("Key1");

const user = {
  name: "Rahul",
  fullName: "Rahul Anand",
  [mySymb]: "myKey1",
  age: 18,
  location: "Chandigarh",
  email: "rahul@google.com",
  isLogedIn: false,
  lastLoggedinDats: ["Monday", "Saturday"],
};

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["fullName"]);
// console.log(user[mySymb]);

// console.log(typeof user[mySymb]);

user.email = "rahul@chatmail.com";

//Object.freeze(user);

user.email = "rahul@microsoft.com";

//console.log(user);

user.greeting = function () {
  console.log("Hello Jsuser");
};

console.log(user.greeting());

user.greetingTwo = function () {
  console.log(`Hello Baby,${this.name}`);
};
console.log(user.greetingTwo());
