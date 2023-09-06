//Context Of This Keyword
//1st Example

// console.log(this);
// this.name = "rahul";

// console.log(this.name);
// console.log(window.name); //this==window
// console.log(name);

//when we use this keyword outside the function the context of this keyword is always be window object

//this keyword inside a function

function check() {
  console.log(this);
}
check();

// this keyword agr hm inside a function ya outside a function use karte hn then it always point to window object

//this keyword inside a object

//when we use this keyword inside an object it always point to that object itself

// const person = {
//   checkThis: function () {
//     console.log(this);
//   },
// };

// person.checkThis();
// console.log(person);

// const func = person.checkThis;
// func();

//The value of the this keyword is determined by calling context the way in which the function is called.
//when you have not any calling context it always point to window object
//But in case if you have calling context it always point to calling   of a function

const person1 = {
  checkThis: function () {
    "use strict"; //it removes the default behaviour of this keyword
    console.log(this);
    function checkThisAgain() {
      console.log(this);
      this.name = "rahul";
    }
    checkThisAgain();
    console.log(this.name);
    console.log(window.name);
  },
};

person1.checkThis();
console.log(person1);
