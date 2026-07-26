//Rendom generates color

const RandomColors = () => {
  const hex = "0123456789abcdef";
  let colors = "#";

  for (let i = 0; i < 6; i++) {
    colors += hex[Math.floor(Math.random() * 16)];
  }
  return colors;
};

let intervalId;
const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      let colors = RandomColors();
      document.body.style.backgroundColor = `${colors}`;
    }, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(invervalId);
  invervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
