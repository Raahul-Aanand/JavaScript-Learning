const course = {
  courseName: "JavaScript",
  price: 999,
  courseInstructor: "HarryBrook",
};

const { courseInstructor: Instructor } = course; //syntax for object destructuring
console.log(Instructor);

const navbar = ({ company }) => {};
navbar((company = "js"));

// {
//   "name": "rahul",
//   "courseName": "js in hindi",
//   "price": "free"
// }
