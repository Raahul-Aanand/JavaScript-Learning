// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(OrderId);
// });

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//   proceedToPayment(OrderId);
// });

//promise is an empty object filled with some data that is undefined intially
//later on when our async task is complete then it will filled with some values
// const github_Api = "https://api.github.com/users/Rahul00154";
// const user = fetch(github_Api); //fetch returns promise

// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

//promise is immutable in nature.

//promise is an object representing the eventual completion or failure of an asynchronous operation.

//promise helps us to handle callback hell and it can be done through promise chaining.

// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return proceedToPayment(paymentInfo);
//   });

//this is known as promise chaining

//Inversion of control is overcome by using promise

//A promise has 3 states: pending | fulfilled | rejected.

//As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.

// A promise resolves only once and it is immutable.

const cart = ["shoes", "kurta", "pants"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })

  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function (paymentInfo) {
    console.log("No matter what happens,I will definitely be called");
  });

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const error = new Error("cart is not valid");
      reject(error);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
      // resolve(orderId);
    }
  });
  return promise;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment success!");
  });
}
function validateCart(cart) {
  return false;
}
