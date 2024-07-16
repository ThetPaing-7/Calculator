let firstInputNumber;
let secondInputNumber;
let operator;




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