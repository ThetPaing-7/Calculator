let display = document.querySelector('#displayArea');
let calculatorKeys = document.querySelector('.calculatorBody');

let firstInputNumber = '';
let operator = '';
let secondInputNumber = '';
let resultDisplayed = false;
let result;

calculatorKeys.addEventListener("click", event => {
    if (!event.target.closest('button')) return;
    const key = event.target;
    const keyValue = key.textContent;

    if (key.dataset.type === 'number') {
        if (resultDisplayed) {
            operator = '';
            secondInputNumber = '';
            resultDisplayed = false;
            display.textContent = '';
        }
        if (operator === '' && result === ''){
            firstInputNumber = result;
            display.textContent = firstInputNumber;
        }else if(operator === '') {
            firstInputNumber += keyValue;
            display.textContent += keyValue;
        } else {
            secondInputNumber += keyValue;
            display.textContent += keyValue;
        }
    } else if (key.dataset.type === 'number-decimal') {
        if (resultDisplayed) {
            operator = '';
            secondInputNumber = '';
            resultDisplayed = false;
            display.textContent = '0.'; 
        }

        if (operator === '') {
            if (!firstInputNumber.includes('.')) {
                firstInputNumber += '.';
                display.textContent += '.';
            }
        } else {
            if (!secondInputNumber.includes('.')) {
                secondInputNumber += '.';
                display.textContent += '.';
            }
        }
    } else if (keyValue === "C") {
        if (secondInputNumber !== '') {
            display.textContent = display.textContent.slice(0, -secondInputNumber.length);
            secondInputNumber = '';
        } else if (operator !== '') {
            display.textContent = display.textContent.slice(0, -1);
            operator = '';
        } else {
            display.textContent = '';
            firstInputNumber = '';
            operator = '';
            secondInputNumber = '';
            resultDisplayed = false;
        }
    } else if (keyValue === "=") {
        if (firstInputNumber !== '' && operator !== '' && secondInputNumber !== '') {
            const result = operate(parseFloat(firstInputNumber), parseFloat(secondInputNumber), operator);
            display.textContent = result;
          
            firstInputNumber = result.toString();
            operator = '';
            secondInputNumber = '';
            resultDisplayed = true; 
        }
    } else {
        if (firstInputNumber !== "" && !operator && !resultDisplayed) {
            operator = keyValue;
            display.textContent += `${operator}`;
        } else if (firstInputNumber !== "" && operator !== "" && secondInputNumber !== "") {
            result = operate(parseFloat(firstInputNumber), parseFloat(secondInputNumber), operator);
            display.textContent = result;
            firstInputNumber = result.toString();
            operator = keyValue;
            secondInputNumber = '';
            display.textContent += `${operator}`;
            resultDisplayed = false;
        }else if(resultDisplayed && firstInputNumber !== ""){
            operator = keyValue;
            display.textContent = `${firstInputNumber}${operator}`;
            resultDisplayed = false; 
        }
    }
});

// Function to perform arithmetic operations
const operate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Error: Divide by zero";
            } else {
                return num1 / num2;
            }
        default:
            return "Error";
    }
};
