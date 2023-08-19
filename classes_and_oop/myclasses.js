//ES6
//class is like blueprint for creating object with shared properties and methods.

//it is introduced in es6

//constructor method is called when an object is created from the class
//it initialize the object's properties base on the arguement passed during object creation phase
class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUserName() {
    return `${this.userName.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUserName());
