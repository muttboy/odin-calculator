const operatorButtons = document.querySelectorAll('[data-operator]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalButton = document.getElementById('equal');
const allClear = document.getElementById('clear');
const decimalButton = document.getElementById('decimal');
let screenDisplay = document.getElementById('screen');
let firstNumber = '';
let secondNumber = '';
let operand = '';
let result = '';

function add(firstNumber, secondNumber) {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
}

function subtract(firstNumber, secondNumber) {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
}

function multiply(firstNumber, secondNumber) {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
}

function divide(firstNumber, secondNumber) {
    if (parseFloat(secondNumber) === 0) {
        result = "ERROR"
    } else {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    
}

//Resets value of numbers, operand, and clears the text display
allClear.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operand = '';
    screenDisplay.textContent = ''
})

//Assigns value to operand upon click
operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        if (firstNumber == '' && secondNumber == '') {
            return
        } else if (firstNumber != '' && secondNumber == '') {
            operand = operator.textContent
            screenDisplay.textContent += operand
        } else if (firstNumber != '' && secondNumber != '') {
            return
        }
    })
})

//Assigns value to number variables and prints it on the text display
numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        if (operand == '') {
            firstNumber += number.textContent
            screenDisplay.textContent += number.textContent           
        }   else if (firstNumber != '' && operand != '') {
            secondNumber += number.textContent
            screenDisplay.textContent += number.textContent
        }
    })
})

//Function to calculate based on operand chosen
function operate(firstNumber, operand, secondNumber) {
    switch(operand){
        case '+':
            add(firstNumber,secondNumber)
            break;
        case '-':
            subtract(firstNumber,secondNumber)
            break;
        case '*':
            multiply(firstNumber,secondNumber)
            break;
        case '/':
            divide(firstNumber,secondNumber)
            break;
    }
}

//Calls math function and print result to display
equalButton.addEventListener('click', () => {
    if (firstNumber == "" || secondNumber == "" || operand == "") {
        return
    } else {
        operate(firstNumber, operand, secondNumber)
        screenDisplay.textContent = result;
        firstNumber = result
        secondNumber = "";
        operand = ""
    }
})