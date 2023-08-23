//Function Statement
//A normal function creating using naming convention and by this we do hoisting

function a() {
  console.log("function Statement");
}
a();
//Function expression:-
//When we assign function to a variable and we can not do hoisting through this

const fun1 = function b() {
  console.log("function expression");
};
fun1();
//Anonymous function;-
//A function without name and it is used as value in program

// function(){

// }

//named function expression:-
//a function with a name is known as named function expression

let c = function xyz() {
  console.log("named function expression");
};
c();

//diff b/w parameter and arguement
//when we creating a function and we put some value in this () that is parameter

//when we call this function and pass variable in this() that is our arguement

//First Class Function ;-
//When we pass function as an argument
//when function is used as values
//can be executed inside closure
//can be taken as return

//first class citizens is same as first class function

//arrow function:-

//Special Type of function expression
//It allows us to write function more fast because
//No need to use function keyword
//No need to use parenthesis In case of single Parameter
//No need to use curley{} if single line of  code in function
//No need to use return statement if single line code in function
//hoisting is not possible of arrow function
