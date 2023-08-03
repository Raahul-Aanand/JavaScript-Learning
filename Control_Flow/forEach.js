//foreach method of array
//it is another type of loop which we used to traverse over the array

//Syntax
// array.forEach(function (currentValue, index, array) {
//   // code to be executed for each element
// });

/*
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array that forEach is being applied to.
*/


let dishes = ["Biryani", "Chhole", "Jalebi", "chicken"];

dishes.forEach(function(dish){
   console.log(dish);
})
