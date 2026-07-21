const clock = document.querySelector("#clock");

setInterval(() => {
  const myDate = new Date();
  const currentTime = myDate.toLocaleTimeString();
  clock.innerText = currentTime;
}, 1000);
