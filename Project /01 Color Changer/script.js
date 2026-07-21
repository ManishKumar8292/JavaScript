/* const grayBtn = document.querySelector("#grey");
const whiteBtn = document.querySelector("#white");
const blueBtn = document.querySelector("#blue");
const yellowBtn = document.querySelector("#yellow");

grayBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "grey";
});
whiteBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
blueBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
yellowBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
}); */

const Btns = document.querySelectorAll(".button");

/* const colors = ["gray", "white", "blue", "yellow"];

Btns.forEach((item, i) => {
  item.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[i];
  });
}); */

Btns.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.style.backgroundColor = item.id;
  });
});
