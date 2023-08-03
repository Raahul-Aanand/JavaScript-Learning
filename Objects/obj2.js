// const tinderUser = new Object(); //singleton Object
const user = {};
user.id = "123abc";
user.name = "rahul";
user.isLoggedIn = false;
//console.log(user);

const tinderUser = {
  email: "rahul@mail.com",
  fullname: {
    userfullName: {
      firstName: "Rahul",
      LastName: "Anand",
    },
  },
};

// console.log(tinderUser.fullname.userfullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "r@mail.com",
  },
  {
    id: 1,
    email: "r@mail.com",
  },
  {
    id: 1,
    email: "r@mail.com",
  },
];

users[1].email;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//to check property present in object or not by hasOwnProperty()
console.log(user.hasOwnProperty("isLogged"));
