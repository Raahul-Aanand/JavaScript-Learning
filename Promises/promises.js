//promise is an object

//to create promise

const promiseOne = new Promise(function (resolve, reject) {
  //Do An Async task
  //DB calls,crytography,network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Asys task two");
    resolve();
  }, 1000);
}).then(() => console.log("Async two resolve"));

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Rahul", email: "rahul@google.com" });
  }, 1000);
});
//Jo bhi resolve ke andar parameter(data) pass karte hain th use
// .then me hum access kar sakte hn

promiseThree.then(function (user) {
  console.log(user);
});

promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ userName: "RahulAnand", password: 123 });
    } else {
      reject("ERROR Something Went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("error occured");
    }
  }, 1000);
});

async function consumePromiseFive() {
  // isme reject wali statement ko hm catch ny kr skte
  //   const response = await promiseFive;
  //   console.log(response);
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
