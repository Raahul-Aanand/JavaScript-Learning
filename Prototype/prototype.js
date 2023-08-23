/*
prototype is an Object that get attach to function/method/object and this object has some hidden properties

Whenever we create object/ function/ methods/ array/ variable , these all are attached with some hidden properties, which we call prototype

 _proto_ is reference to prototype ( or it points towards prototype ), if we want to access prototype, we do _proto_

prototype object has a prototype of its own, and so on until an object is reached with null as its prototype,  this is called prototype chaining 



prototypes are the mechanism by which javaScript object inherit feature from one another
*/

// let myName = "rahul    ";
// let mychannel = "rahul@mail     "
// console.log(myName.trim().length);

let myHero = ["Thor", "spiderMan"];

let heroPower = {
  thor: "hammer",
  spiderMan: "sling",

  getSpidyPower: function () {
    console.log(`spidy power is ${this.spiderMan}`);
  },
};

Object.prototype.rahul = function () {
  console.log(`Rahul is present in all object`);
};

Array.prototype.heyRahul = function () {
  console.log(`hey rahul present in all array`);
};

// heroPower.rahul();
myHero.heyRahul();
// heroPower.heyRahul();

//Inheritance

const user = {
  name: "chai",
  email: "chai@google",
};

const teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js assignment",
  fulltime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

//modern Syntax
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "rahulcode     ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`true length is ${this.trim().length}`);
};

anotherUserName.truelength();

"rahul".truelength();
"iceTEA".truelength();
