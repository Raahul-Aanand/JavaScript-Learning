//object copy
let obj = {
  name: "rahul",
  address: {
    City: "Noida",
    sate: "Up",
  },
  getData: function () {
    return "all data is here";
  },
};

// let user = obj;
//when we assign obj to other object then their reference (memory location)is copied

//and when we change in anything to object they visible in first object also

// user.name = "peter";
// console.warn(obj);

let name = "anil";
let name1 = name;

//when we assign variable to other variable and change some value to other variable then they are not visible in first variable because variable is copied via value

name1 = "anand";
console.log(name);

//shallow copy:- copying actual value not memory loaction

//through object destructuring or object.assign in object it only copy the value

//But in nested object it copy the actual memory location.

// let user1 = Object.assign({}, obj);

let user1 = { ...obj };
user1.name = "Anand";
user1.address.City = "Gurgaon";

console.log("Object is :", obj);
console.log("user is :", user1);

//Deep Copy
//deep copy not work when there is method and date inside object

// let user2 = JSON.parse(JSON.stringify(obj));
// user2.address.City = "Gurgaon";

//deep copy using lodash library to copy date and method of object that is not access by previous method

let user3 = _.cloneDeep(obj);
user3.name = "Supriiya";
user3.address.City = "Gurugram";
console.log("Object is :", obj);
console.log("user is:", user3);

//shallow copy creates a new object but it maintais references to nested objects
//changes to nested object not affect to original and copied object

const person = {
  name: "amisha",
  address: function () {
    city: "Ranchi";
    state: "Jharkhand";
  },
};

const shallowCopy = { ...person };
shallowCopy.address.city = "New Delhi";

console.log(person.address.city);
console.log(shallowCopy.address.city);

//a shallow copy creates a new object that copies the properties of original object, but it maintains reference to any nested objects.

//changes made to nested objects will affect both the original and copied object

//A deep copy creates enitirely a new object with all nested objects.

//In deep copy changes to nested object will not affect the origial objects or any other copies
//to achieve a deep copy we need to use json.parse and json.stringify
