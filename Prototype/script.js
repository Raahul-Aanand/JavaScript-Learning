//Prototypes are the mechanism by which javascript object inherit features from one another
const arr = ["Rahul", "Supiiriiya"];

let object = {
  name: "rahul",
  city: "Chandigarh",

  getIntro: function () {
    console.log(`${this.name} from ${this.city}`);
  },
};

let object2 = {
  name: "abhishek",
};

object2.__proto__ = object;
