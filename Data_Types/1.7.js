//Boolean Values And Comparison Operator

let booleanType = true;
let stringType = "true";

console.log(typeof booleanType,typeof stringType);

//Method Returns BooleanValues

let email = "rahul@example.com";

let booleanValues = email.includes("@");
//console.log(booleanValues);

//Comparison Operator Always returns Boolean Values
//==,===,!==,!=
//<,<=
//>.>=

let points = 23;
console.log(points == "23");
console.log(points==="23"); //It gives false because in it 23 is not a number
console.log(points != 234);
console.log(points>10);