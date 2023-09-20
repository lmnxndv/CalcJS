const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const oprBtns = document.querySelectorAll(".opr");
const total = document.querySelector(".total");
const rsltArea = document.querySelector(".result");
let result;
let opr;

function calc(opr, num1, num2) {
  if (!num1 || !num2) {
    return alert("Invalid input. Please enter valid numbers.");
  }
  switch (opr) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  rsltArea.textContent=""
  rsltArea.textContent += result;
}
oprBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    opr = btn.textContent;
  });
});
total.addEventListener("click", () => {
  calc(opr, +num1.value, +num2.value);

});
