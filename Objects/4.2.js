//Function Vs Method

// let ageCalculate = function(birthYear){
//     let age = 2023 - birthYear;
//     console.log(`Current Age is = $(age)`);
// }

// ageCalculate(2003);

//Method = ye kuch nahi hai ek function ee ae jo object ke andar as object property(key) holding function as values

let person = {
    ageCalculate: function(birthYear = 2008){
        let age = 2023 - birthYear;
        return age;
    }
}

console.log(`current age is ${person.ageCalculate()}`);