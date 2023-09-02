const el = document.getElementById("text1");
const logo = document.getElementById("text-output1");
el.addEventListener(
  "keyup",
  debounce(function (e) {
    console.log(e);
    logo.innerText = e.target.value;
  }, 1000)
);
