//Arrays

let dishes = ["Biryani","Chat","Dhosa"];

//Access
console.log(dishes[2]);

//Modify the array
dishes[0] = "Chhole";
console.log(dishes);

//Array Methods
//Join Method
console.log(dishes.join("-"));

//indexof
console.log(dishes.indexOf("Chhole")); //case sensitive

//concat method
let newDishes = ["sweets","Gulab-Jamun"];
console.log(dishes.concat(newDishes));
let updatedDishes = dishes.concat(newDishes);

//length Property
console.log(updatedDishes.length);

//push Method

console.log(updatedDishes.push("PaniPuri")); //return new length of the array

console.log(updatedDishes);

//Pop Method
console.log(updatedDishes.pop());