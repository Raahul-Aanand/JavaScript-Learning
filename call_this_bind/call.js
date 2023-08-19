function setUserName(userName) {
  this.userName = userName;
  console.log("called");
}

function createUser(userName, email, password) {
  setUserName.call(this, userName); //to call this method we use .call method because it wont call implicitly
  //when we use call method first param is this because this stores the called userName

  this.email = email;
  this.password = password;
}

const user = new createUser("rahul", "rahul@fb", 123);

console.log(user);
