/* Immediately Invoked Function Expression (IIFE) */

//=>to avoid Globle pollution and a function which invoked immediately.

/* ==>Named IIFE */

(function chai() {
  console.log("DB CONNECTED"); //DB CONNECTED
})();

let username = "DB";

(function () {
  let username = "Hitesh";
  console.log(`${username} , Welcome`); //Hitesh , Welcome
})();

(() => {
  console.log(`DB CONNECTED`); //DB CONNECTED
})();

((num1, num2) => {
  console.log(num1 + num2); //101
})(12, 89);
