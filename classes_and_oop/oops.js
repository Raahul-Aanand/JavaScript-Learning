//Object:
//it is a collection of properties and method
//object literal
//Part of oops
//:-Construtor Function
//:- ProtoTypes
//:-Classes
//:-Instances(new,this)

const user = {
  userName: "Rahul",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(this);
    console.log(`UserName: ${this.userName}`);
    //console.log("Got user details from dataBase");
  },
};

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);
//Constructor function

// const promise = new Promise();

//new keyword is used to create new context
//new keyword is a constructor function
//constructor function give you create multiple instances from single object literal

function User(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.userName}`);
  };
  return this;
}

// new keyword first time it create new object
//second constructor function call hota hai new keyword ke karan

//constructor function karta ye hai ki jitne bhi arguement wegrah hn aapke ppss unhe pack krkr deta hai aapko

//this keyword me jo bhi constructor function ke arguement hote hain wo sab inject ho jate hain

//function ke andar mil jate hn

const userOne = new User("Rahul Anand", 13, true);
const userTwo = new User("Js", 12, false);
console.log(userOne);
// console.log(userTwo);
