const add = function (a, b) {
  return parseInt(a) + parseInt(b);
};
const subtract = function (a, b) {
  return parseInt(a) - parseInt(b);
};
const mutiply = function (a, b) {
  return parseInt(a) * parseInt(b);
};
const divide = function (a, b) {
  if (parseInt(a) === 0 || parseInt(b) === 0) return "Unexpeted operation";
  return parseInt(a) / parseInt(b);
};
const pow = function (a, b) {
  return Math.pow(parseInt(a), parseInt(b));
};
const modulo = function (a, b) {
  return parseInt(a) % parseInt(b);
};
let displayCalculationDivVar = document.querySelector(
  "#displayCalculationDivInput"
);
let displayResultDivVar = document.querySelector("#displayResultDivInput");

let firstOperand = null;
let secondOperand = null;
let operator = "empty";
let firstOperandInput = false;
let secondOperandInput = false;
let result = null;
let array = [];
let equalsButtonPressed = false;

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
    displayCalculationDivVar.value += e.target.value;
    array.push(e.target.value);
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
    displayCalculationDivVar.value += e.target.value;
    if (firstOperandInput === false) {
      firstOperand = array.join("");
      firstOperandInput = true;
      array = [];
    }
    operator = e.target.value;
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
let acButton = document.querySelector("#ac");
acButton.addEventListener("click", (e) => {
  array = [];
  firstOperand = null;
  firstOperandInput = false;
  secondOperand = null;
  secondOperandInput = false;
  displayCalculationDivVar.value = "";
  displayResultDivVar.value = "";
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
  secondOperand = array.join("");
  secondOperandInput = true;
  array = [];
  if (operator === "+") {
    result = add(firstOperand, secondOperand);
  } else if (operator === "-") {
    result = subtract(firstOperand, secondOperand);
  } else if (operator === "x") {
    result = mutiply(firstOperand, secondOperand);
  } else if (operator === "/") {
    result = divide(firstOperand, secondOperand);
  } else if (operator === "^") {
    result = pow(firstOperand, secondOperand);
  } else if (operator === "%") {
    result = modulo(firstOperand, secondOperand);
  }
  displayCalculationDivVar.value = String(result);
  displayResultDivVar.value = displayCalculationDivVar.value;
  array.push(String(result));
  firstOperandInput = false;
  equalsButtonPressed = true;
});
