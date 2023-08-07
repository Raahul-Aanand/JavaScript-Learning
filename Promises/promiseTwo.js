// Create a function that returns a promise. The promise should resolve after 5 seconds with the value "Hello World!". Use the setTimeout function to delay the resolution of the promise.

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Hello World");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("resolved");
});

//Create a function that returns a promise.
//The promise should reject immediately with the error message "Something went wrong!".

const promiseError = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "Abhi154", password: 123 });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseError
  .then(function (user) {
    console.log(user);
  })
  .catch(function (error) {
    console.log(error);
  });

//Create a function that takes a number as an argument and returns a promise. The promise should resolve to the square of the number after a random delay between 1 and 3 seconds. Use async/await to call this function with a few different numbers and log the results to the console.
