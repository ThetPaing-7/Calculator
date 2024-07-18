let display = document.querySelector('#displayArea');
let calculatorKeys = document.querySelector('.calculatorBody');

let firstInputNumber = '';
let operator = '';
let secondInputNumber = '';


calculatorKeys.addEventListener("click", Event => {
    if(!Event.target.closest('button')) return
    const key = Event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent; 

   if(key.dataset.type === 'number' || key.dataset.type === 'number-zero'){
    if(operator === ''){
        firstInputNumber += keyValue;
    }else{
        secondInputNumber += keyValue;
    }
    display.textContent += keyValue;
   }else if(keyValue === "C"){
    // Clear display and rest values
    display.textContent = "";
    firstInputNumber = "";
    operator = "";
    secondInputNumber = "";
   }else if(keyValue === "="){
    if (firstInputNumber !== '' && operator !== '' && secondInputNumber !== '') {
        // Calculate result if both inputs and operator are provided
        const result = operate(firstInputNumber, secondInputNumber, operator);
        display.textContent = result;
        firstInputNumber = result;  // Store result for future calculations
        operator = "";
        secondInputNumber = "";
    }

   }
   else{
    if(firstInputNumber !== ""){
        operator = keyValue;
        display.textContent += `${operator}`;
    }
   }
   
});


//Operate Function
const operate = (firstInputNumber, secondInputNumber, operator) => {
    firstInputNumber = parseFloat(firstInputNumber);
    secondInputNumber = parseFloat(secondInputNumber);
    
    switch (operator) {
        case "+":
            return addedNumber(firstInputNumber, secondInputNumber);
        case "-":
            return subtractedNumber(firstInputNumber, secondInputNumber);
        case "*":
            return multipliedNumber(firstInputNumber, secondInputNumber);
        case "/":
            return dividedNumber(firstInputNumber, secondInputNumber);
        default:
            return "Error";
    }
};






// Operate function
(firstInputNumber,secondInputNumber,operator) =>{
    if(operator === "+"){
        addedNumber(firstInputNumber,secondInputNumber);}
    else if(operator === "-")
        subtractedNumber(firstInputNumber,secondInputNumber);
    else if(operator === "*")
        multipliedNumber(firstInputNumber,secondInputNumber);
    else if(operator === "/")
        dividedNumber(firstInputNumber,secondInputNumber);
    else{
        return "Hello Mate";
    }
        
}


// Add function
let addedNumber = (firstNumber, secondNumber) => { firstNumber + secondNumber};

// subtract function
let subtractedNumber = (firstNumber, secondNumber) =>{ firstNumber - secondNumber};

//multiply function
let multipliedNumber = (firstNumber, secondNumber) => { firstNumber * secondNumber};

// divide function
let dividedNumber = (firstNumber, secondNumber) => {firstNumber / secondNumber};