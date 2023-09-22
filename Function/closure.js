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

// 0) Lexical environment = EC's Local Memory + Reference to Lexical Environment of its parent.

// 1) Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory.

// 2) Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked.

// 3) Global execution context holds reference to null.

// 4)  Javascript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed.

// 5) The mechanism mentioned in point 4 above is called SCOPE CHAIN.

// 6) If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the  browser's console.

// function outer() {
//   let a = 5;
//   function inner() {
//     let b = 4;
//     console.log("inner", a);
//   }
//   function innerOne() {
//     console.log("innerOne", a);
//      console.log("innerOne", b);
//   }
//   inner();
//   innerOne();
// }

// outer();

// console.log(a);

//a closure is a function bundled together with its lexical environment
//when a function is returned even if it vanished in execution context
//still remember its reference it was pointing to

// function x() {
//   var a = 7;

//   return function y() {
//     console.log(a);
//   };
//   a = 100;
// }

// var z = x();
// console.log(z);

// z();

//if we want to print 1 to 6  setTimeOut() using var  it is not possible without closure because everytime loop run and stores in memory to wait for their time to execute

// setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function y(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, i * 1000);
//     }
//     y(i);
//   }
// }

// x();

// function z() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// z();

// function close(b) {
// var a = 5;
//   function inner() {
//     console.log(a, b);
//   }
// var a = 10;
// there is no problem in accessing the outer variable if variable is declared wherever in the parent function
//   let a = 10; //in let case there is also no issue in accessing the outer variable
//   return inner;
// }

// let func = close("Hello Coder");
// func();
// close("Hello Coder")(); //we can access the outer function with innner function by adding two parenthesis when calling a function

//if we pass the parameter to outer function it also make lexical environment with inner function means we can also access that parameter in inner function
function outest() {
  // var c = 10;
  function outer(b) {
    var a = 5;
    function inner() {
      console.log(a, b, c);
    }
    return inner;
  }
  return outer;
}
let c = 100;
//*whenever we are going to access variable that present in not their scope then it will be looking for that in their parent scope if also that is not preset then it looking in their grandparent scope this is called scope chain

var outer1 = outest()("Hello Baby");
outer1();

//closer is used in function currying
//it is also used in some higher order function like memoize once etc

//Data Hiding through closer

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
// we can make these counter function through constructor function

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
counter1.incrementCounter();
// counter1();

//  Unused variables are automatically deleted in High Level Programming language by garbage collector.
// Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
//  Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.

// var counter2 = counter();
//it will make fresh call it makes fresh new copy
// counter2();
