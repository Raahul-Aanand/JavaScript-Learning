// let a = 30;
// const b = 40;
// var c = 50;
var c = 300;
let a = 300;
if (true) {
  let a = 5;
  const b = 6;
  var c = 7;
  //console.log("Inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Rahul";

  function two() {
    const website = "youtube";
    //console.log(userName);E
  }
  //console.log(website);
  two();
}
one();

if (true) {
  const userName = "rahul";
  if (userName === "rahul") {
    const website = " Youtube";
    //console.log(userName + website);
  }
  //console.log(website);
}
//console.log(userName);

// console.log(addone(7));

function addone(num) {
  return num + 1;
}

// console.log(addTwo(5));

const addTwo = function (num) {
  return num + 2;
};

/* 

*scope refers to the context in which variable function and objects are accessible.

*/

/* 

* Scope Chain=> it refers to the hierarchial structure of nested functions or blocks and how they relate to each other

* Process of searching for variable through multiple levels of nested scopes known as scope chain

*/

const globalVar = "I am Global";

function outer() {
  const outer = "I am Outer";
  function inner() {
    const inner = "I am in inner Scope";
    console.log(outer); //accessible due to outer scope
    console.log(inner); //accessible local scope
    console.log(globalVar); //accessible due to global scope
  }
  inner();
}

outer();
