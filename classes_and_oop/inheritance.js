class user {
  constructor(username) {
    this.username = username;
  }
  islogMe() {
    console.log(`userName is ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course was added by ${this.username}`);
  }
}

const coffee = new teacher("coffee", "coffee@google", 123);
coffee.addCourse();

const masalachai = new user("masalaChai");

// masalachai.addCourse();

masalachai.islogMe();
console.log(coffee instanceof user);
