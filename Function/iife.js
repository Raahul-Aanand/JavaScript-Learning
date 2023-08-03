//Immediately Invoked Function Expression
//it avoid variable name clashes and create private scope

(function coffee() {
  //named iffe
  console.log(`Db connected`);
})();

((name) => {
  //unnamed iiffe
  console.log(`db connected two ${name}`);
})("rahul");
