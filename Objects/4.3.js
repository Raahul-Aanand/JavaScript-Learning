//This Keyword

//In each method we have an address of special keyword called "tHIS"
//this keyword represent the object, Calling the method in which this is present

let person = {
  firstName: "Harry",
  lastName: "Brook",
  city: "Delhi",
  birthYear: 1998,
  Education: "Software engineer",

  getSummary: function () {
    // return `${this.firstName} ${this.lastName} lives in ${this.city}.His birthyear is ${this.birthYear}`;
    return this;
  },
};

console.log(person.getSummary());

//Step 1: Check in which method we use "This" Keyword

//
