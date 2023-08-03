// //Objects

// let car = {
//     color: "black",
//     model: "2022",
//     company: "Honda"
// }

// //console.log(car);

// //Accessing the javascript object properties
// console.log(car["color"]);

// //second method
// console.log(car.model);

// let propertyName = "color";
// console.log(car[propertyName]);


// //Modify the object

// car.color = "brown";
// car.model = "BMW";
// console.log(car.color);

//Delete properties of object
let obj = {
    prop1: "Value1",
    prop2: "value2"
}

let returnValue = delete obj.prop1;  
//it always return true
console.log(obj.prop1,returnValue);