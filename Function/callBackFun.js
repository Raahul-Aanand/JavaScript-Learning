//Calling function:-
//Function that is passed on as an arguement is known as callback Function

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

function attachEventListener() {
  let count = 0;
  const clickMe = document.querySelector(".clickMe");
  clickMe.addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}
attachEventListener();
