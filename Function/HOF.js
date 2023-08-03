//Higher Order Function (function passing As an Arguement )

const upperCase = function(str){
    return str.toUpperCase();
}

const lowerCase = function(str){
    return str.toLowerCase();
}
const transformer = function(str,fun){
    return fun(str);
}

console.log(transformer("Hello Paroo",upperCase));

//Function Returning Another Function

const compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
};

compliment("You are Good Coder")("Carry");


//other Method
const complemented = compliment("Fuck You JAVASCRIPT");

complemented("Babe");


//Function

//Immediately invoked function expression

(function(name){
  console.log("This function will never execute again",name);
})("IIFE")

