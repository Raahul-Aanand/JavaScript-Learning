// let a = 30;
// const b = 40;
// var c = 50;
var c = 300;
let a = 300;
if (true) {
  let a = 5;
  const b = 6;
  var c = 7;
  //console.log("Inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Rahul";

  function two() {
    const website = "youtube";
    //console.log(userName);E
  }
  //console.log(website);
  two();
}
one();

if (true) {
  const userName = "rahul";
  if (userName === "rahul") {
    const website = " Youtube";
    //console.log(userName + website);
  }
  //console.log(website);
}
//console.log(userName);

console.log(addone(7));

function addone(num) {
  return num + 1;
}

console.log(addTwo(5));

const addTwo = function (num) {
  return num + 2;
};
