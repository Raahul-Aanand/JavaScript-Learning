//generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(Math.floor(Math.random() * 16));

// console.log(randomColor());
let interValId;
const startChangingColor = function () {
  if (!interValId) {
    interValId = setInterval(changeBgColor, 1000);
  }
};

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

const stopChangingColor = function () {
  clearInterval(interValId);
  interValId = null; //memory free
};

const start = document
  .querySelector("#start")
  .addEventListener("click", startChangingColor);

const stop = document
  .querySelector("#stop")
  .addEventListener("click", stopChangingColor);
