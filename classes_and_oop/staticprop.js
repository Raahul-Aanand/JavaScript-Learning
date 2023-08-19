class User {
  constructor(Username) {
    this.Username = Username;
  }
  logMe() {
    console.log(`username: ${this.Username}`);
  }
  static createId() {
    return `123`;
  }
}

const user = new User("rahul");

console.log(rahul.createId());
