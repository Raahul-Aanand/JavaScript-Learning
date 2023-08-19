const name = {
  firstName: "Rahul",
  lastName: "Anand",
};

let printfullName = function (hometown, state) {
  console.log(
    `full name is ${this.firstName} ${this.lastName} from ${hometown},${state}`
  );
};
printfullName.call(name, "Dehradun", "Uttarakhand");

const name2 = {
  firstName: "sachin",
  lastName: "Tendulkar",
};

//By call method we can borrow function from other oject and use wiht data of some other object.

printfullName.apply(name2, ["Patna", "Bihar"]);
//first arguement is always referece to this variable
//in call method we pass arguement as comma separated individual
//In apply method we pass second arguement as array list

//Bind Method
//bind method is used to bind method with the object and return as the copy of the method

const printMyname = printfullName.bind(name2, "Patna", "Bihar");
console.log(printMyname);
printMyname();
