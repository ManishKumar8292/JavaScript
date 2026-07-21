const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const result = document.querySelector("#results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = Number(inputs[0].value);
  const weight = Number(inputs[1].value);
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please fill correct values");
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  result.innerHTML = `<span>Your BMI is <strong>${bmi.toFixed(2)}</strong></span>`;

  inputs[0].value = "";
  inputs[1].value = "";
});
