const add = function (a, b) {
  return parseInt(a) + parseInt(b);
};

const subtract = function (a, b) {
  return a - b;
};
const mulyiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  }
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
};
let displayCalculationDivVar = document.querySelector("#displayCalculationDiv");
let displayResultDivVar = document.querySelector("#displayResultDiv");
let array = [];
let firstOperand;
let secondOperand;
let operator = "empty";
let firstOperandInput = false;
let secondOperandInput = false;

let numberButtonsList = document.querySelectorAll(".number");
let numberInputNotificationDivVar = document.querySelector(
  "#numberInputNotificationDiv"
);
numberButtonsList.forEach((numberButton) => {
  numberButton.addEventListener("mousedown", (e) => {
    numberInputNotificationDivVar.style.cssText =
      "background-color: rgb(50, 170, 2); box-shadow: 0 0 6px rgb(80, 230, 2)";
    e.target.style.cssText =
      "color: rgb(50, 170, 2); text-shadow: 0 0 5px rgb(80, 230, 2)";
  });
  numberButton.addEventListener("mouseup", (e) => {
    numberInputNotificationDivVar.style.cssText = "";
    e.target.style.cssText = "";
  });
  numberButton.addEventListener("click", (e) => {
    array.push(e.target.value);
    displayCalculationDivVar.textContent += e.target.value;
    if (firstOperandInput === true) {
      secondOperand = array.join("");
      secondOperandInput = true;
    }
    if (operator !== "empty" && secondOperandInput === true) {
      displayResultDivVar.textContent = add(firstOperand, secondOperand);
      firstOperand = displayResultDivVar.textContent;
      firstOperandInput = true;
      operator = "empty";
    }
  });
});

let operationButtonsList = document.querySelectorAll(".operation");
let operationInputNotificationDivVar = document.querySelector(
  "#operationInputNotificationDiv"
);
operationButtonsList.forEach((operationButton) => {
  operationButton.addEventListener("mousedown", (e) => {
    operationInputNotificationDivVar.style.cssText =
      "background-color: rgb(240, 140, 6); box-shadow: 0 0 6px rgb(253, 154, 6)";
    e.target.style.cssText =
      "color: rgb(240, 140, 6); text-shadow: 0 0 5px rgb(253, 154, 6)";
  });
  operationButton.addEventListener("mouseup", (e) => {
    operationInputNotificationDivVar.style.cssText = "";
    e.target.style.cssText = "";
  });
  operationButton.addEventListener("click", (e) => {
    displayCalculationDivVar.textContent += e.target.textContent;
    if (firstOperandInput === false) {
      firstOperand = array.join("");
      firstOperandInput = true;
      array = [];
    }
    operator = e.target.textContent;
  });
});

let cleanButtonsList = document.querySelectorAll(".clean");
let cleanNotificationDivVar = document.querySelector("#cleanNotificationDiv");
cleanButtonsList.forEach((cleanButton) => {
  cleanButton.addEventListener("mousedown", (e) => {
    cleanNotificationDivVar.style.cssText =
      "background-color: rgb(15, 100, 250); box-shadow: 0 0 6px rgb(25, 120, 255)";
    e.target.style.cssText =
      "color: rgb(15, 100, 250); text-shadow: 0 0 5px rgb(25, 120, 255)";
  });
  cleanButton.addEventListener("mouseup", (e) => {
    cleanNotificationDivVar.style.cssText = "";
    e.target.style.cssText = "";
  });
});

let equalsButton = document.querySelector("#equals");
let equalsNotificationDivVar = document.querySelector("#equalsNotificationDiv");

equalsButton.addEventListener("mousedown", (e) => {
  equalsNotificationDivVar.style.cssText =
    "background-color: rgb(255, 50, 53); box-shadow: 0 0 7px rgb(255, 50, 53)";
  e.target.style.cssText =
    "color: rgb(255, 50, 53); text-shadow: 0 0 5px rgb(255, 50, 53)";
});
equalsButton.addEventListener("mouseup", (e) => {
  equalsNotificationDivVar.style.cssText = "";
  e.target.style.cssText = "";
});
equalsButton.addEventListener("click", (e) => {
  array = [];
  displayCalculationDivVar.textContent = displayResultDivVar.textContent;
  displayResultDivVar.textContent = "";
  secondOperand = 0;
  secondOperandInput = false;
});
