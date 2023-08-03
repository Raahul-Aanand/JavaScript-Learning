//Logical Operator

const { stat } = require("fs");

//And &&,OR ||,NOT !

//EXAMPLE

let password = "querty";

// if(password.length > 5 || password.includes("@")){
    
//     console.log("Password strength is strong");
// } else{
//     console.log("Change your password");
// }

//Not operator ! True to false and false to true

let status = false;
if(!status){
    console.log("Your status is = ",status);
}

//Priorities
//Not
//And,Or From left to right

let result = true && false || true && true;

// result = false||true && true;
// result = true && true;
// result = true;
console.log(result);



