//closure

/*
a closure gives you access to an outer function's scope from an inner function even when the outer function has returned
*/

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fun = outer();
// fun();
// fun();

// function sum1(a,b){
//      c = 6;
//     function sum2(){
//        console.log(a+b+c);
//     }
//     return sum2;
// }

// const fun = sum1(2,4);
// fun();

// function outSide() {
//   let a = 1;
//   console.log("this is function: " + a);
//   function inside() {
//     console.log("this is function:" + a);
//   }
//   inside();
// }

// outSide();

//Lexical Scope :- lexical scope gives access to parent variable and its functionalities to its children but parent function not access children function variable and its properties

//And if parent function have two or more children function they can not share its functionalities with each other

function outer() {
  let a = 5;
  function inner() {
    let b = 4;
    console.log("inner", a);
  }
  function innerOne() {
    console.log("innerOne", a);
    console.log("innerOne", b);
  }
  inner();
  innerOne();
}
outer();
