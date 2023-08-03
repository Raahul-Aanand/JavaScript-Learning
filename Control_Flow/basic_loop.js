// //Control Flow
// //For Loops

// for(let i = 0; i<=10; i++){
//     console.log("Abhishek Randwa Hai",i);
// }

//Use cases of For Loop
let dishes = ["dhosa", "chapati", "Chicken", "Chatni", "Mutton"];

//Access the element of array

for(let i = 0; i<dishes.length;i++){
    console.log(dishes[i]);
}
console.log("+++++++++++");
//Through while loop

let j = 0;
while(j<dishes.length){
    console.log(dishes[j]);
    j++;
}
console.log("++++++++++++++");
//Through DO wHILE loop
let k = 0;

do{
    console.log(dishes[k]);
    k++;
}while(k<dishes.length)

let l = 3;
while (l) {
  // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log(i);
  i--;
}
