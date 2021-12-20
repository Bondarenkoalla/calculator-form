const form = document.querySelector(".form");
const container = document.querySelector(".container");
const result = document.querySelector(".result");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const firstNumber = Number.parseInt(formElements.number[0].value);
  const secondNumber = Number.parseInt(formElements.number[1].value);
  const operation = formElements.operation.value;

  let total = 0;
  switch (operation) {
    case "+":
      total = firstNumber + secondNumber;
      break;
    case "-":
      total = firstNumber - secondNumber;
      break;
    case "*":
      total = firstNumber * secondNumber;
      break;
    case "/":
      total = Math.floor(firstNumber / secondNumber);
      break;
  }

  result.innerHTML = `Результат: ${total}`;
}
