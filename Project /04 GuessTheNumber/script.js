let randomNumber = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");
const loworHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = Number(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Plaese enter a number greater than 1.");
  } else if (guess > 100) {
    alert("Plaese enter a number in between 1 to 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      display(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    display(`You Guested Right`);
    endGame();
  } else if (guess < randomNumber) {
    display(`Number is Too Low`);
  } else if (guess > randomNumber) {
    display(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guesslot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function display(message) {
  loworHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", (e) => {
    randomNumber = Math.round(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    display(`Game Started`);
    playGame = true;
  });
}
