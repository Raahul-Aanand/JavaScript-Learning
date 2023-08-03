//If,else,else if

let budgets = 5500;

if (budgets > 6000) {
  console.log("Will Do Dinner in 5 star Hotel");
} else if (budgets > 4500) {
  console.log("Will Do Dinner in 3 Star Hotel");
} else if (budgets > 3000) {
  console.log("Will Do dinner in 2 star hotels");
} else {
  console.log("Run If " + "All" + "Condition False");
}

console.log("I am Outside of conditional block");

//Nested If statement

let num = 23;

if (num > 22) {
  console.log("run if first condition true");
  if (num > 24) {
    console.log("Run if both condition true");
  }
  if (num > 20) {
    console.log("RUN IF ALL CONDITION TRUE");
  }
}

// Break And Continue Statement
//Also Called Jump Statement

//Continue statement

//Used to skip some values of loop

// for(let i = 1; i<=10;i++){

//     if(i==2){
//         continue; //Move Towards The next Iteration
//     } console.log("Value of i = ",i);
// }

//Break Statement
//Used to terminate the loop and control transfer from outside loop

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("our desired file is = ", i);
    break;
  }
  console.log("value of i =", i);
}
console.log("Outside the loop");

//ternary operator(?:)

let age = 18;
if (age > 15) {
  console.log("qualify");
} else {
  console.log("fail");
}

let result = age > 18 ? "Qualify" : "Fail";
console.log(result);

//Switch Statement

let result1 = null;
switch (age) {
  case 15:
    break;
  case 16:
    break;
  case 17:
    result1 = "Qualify";
    break;
  default:
    result1 = "Not allowed";
}

console.log(result1);
