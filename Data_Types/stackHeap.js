//stack it stores primitive data value and it cannot changed by modifying it

//heap: isme non-primitive data store hota ae ye copy nahi reference pass krte jisse hm usme kch bhi chnge karenge th original value me changes dikhegi

let myName = "Rahul";
let anotherName = myName;
console.log(myName);
anotherName = "Anand";
console.log(anotherName);

let userOne = {
  user: "rahul Anand",
  email: "rahul@mail.com",
};

let userTwo = userOne;
userTwo.email = "userone@mail.com";

console.log(userOne.email);
console.log(userTwo.email);
