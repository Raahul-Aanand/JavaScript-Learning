//
console.log("Namaste");

setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Tanu");

const cart = ["shoes", "pant", "kurta", "Crop-Top"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});

//whenever we have large codebase and there are so many api here and there and api are dependent on one after other then there is callback hell happens

/* 
When a function is passed as an argument to another function, it becomes a callback function.
 This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 
*/

//inversion of control
//you loose the control of our code while using callback

/* 
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control. 
*/

api.createOrder(cart, function () {
  api.proceedToPayment();
});
