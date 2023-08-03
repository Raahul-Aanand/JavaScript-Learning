// // //Strings

// console.log("Hello Coders");

// let firstName = "Wow";
// let lastName = "Coder";
// // //console.log(firstName,lastName);

// // //String Concatination

// // //Method 1 using "+" operator

// // let fullName = firstName+" "+lastName;
// // console.log(fullName);

// //Method 2 using Template literals

// // let fullName = `I want to Become ${firstName} ${lastName}`;
// // console.log(fullName);


// // //Getting String Character

// // //console.log(firstName[0]);

// // //String Method

// // console.log(firstName.toLowerCase());
// // console.log(lastName.toUpperCase());

// // console.log(lastName.indexOf("e")); 

//Common String Method

let hobbies = " coding reading running  ";

//Trim Method
let result = hobbies.trim();
console.log(hobbies);
console.log(result);

//IndexOf Method
console.log(result.lastIndexOf("Running")); //case sensitive

//include method
console.log(result.includes("reading")) //Case Sensitive

//Slice Method
let fullName = "Wowprogrammer"
//console.log(fullName.slice(0,4)); //exluding last one 0-3
let results = fullName.slice(0,3);
console.log(results);
//Original array ya string kbhi mutate nahi hote

console.log("Original String = ",fullName);
console.log("extracted string = ",results);

//String Split method it generally convert string into array

let favouriteColor = "Brown Blue Red Black Gray";

let arrColors = favouriteColor.split(' '); //split ke andar jo hai use ham separator bolte hn

console.log(favouriteColor);
console.log(arrColors);

//Javascript Strings are immutable


let str = "Hello";
str = str + "Programmers";
console.log(str);