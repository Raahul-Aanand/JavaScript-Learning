/* 
Web storage api is used by developer to store data into the browser. 
The data is in key value pair of strings.

storing data can be done by two mechanism 
1.Session storage
2.Local Storage

Session Storage => In this the data is stored in the browser's memory for the specific session.

session more here means until we close the browser window.

the data in session storage is never transfered to the server while making a network request.
---------------------------------------------

Local Storage => It is a web storage mechanism that allows website to store larger amount of data on client side.

=> Data stored in local storage exists even after the browser is closed

*/

console.log(window);
localStorage.setItem("user", "rahul");
console.log(localStorage);
localStorage.clear();
const user = {
  name: "rahul",
};

localStorage.setItem("user", user);
localStorage.setItem("user", JSON.stringify(user));

console.log(JSON.stringify(localStorage.getItem("user")));

console.log(JSON.parse(localStorage.getItem("user")));
