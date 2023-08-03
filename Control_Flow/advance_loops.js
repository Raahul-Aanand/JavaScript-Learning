//for of loop

//["",""]
// [{}, {}, {}];

const arr = [1, 2, 4, 6, 7];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "hello world!";

for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`);
}

// const myObject = {
//   game1: "NFS",
//   game2: "spiderman",
// };

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }

const myObject = {
  js: "javascript",
  cpp: "cplusplus",
  rb: "ruby",
  py: "python",
};
//for in Loop
for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject}`);
}

const programming = ["js", "oy", "rb", "java", "cpp"];

// for (const key in programming) {
//   console.log(key);
// }

//foreach loop

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

const values = coding.forEach((item) => {
  //console.log(item);
  return item;
});

console.log(values);

coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  //   console.log(item);
}
// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "JavaScript",
    languagefileName: "js",
  },
  {
    languageName: "python",
    languagefileName: "py",
  },
  {
    languageName: "cplusplus",
    languagefileName: "cpp",
  },
];

myCoding.forEach((item) => {
  //   console.log(item.languageName);
});
