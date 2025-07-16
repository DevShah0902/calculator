function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

let num1 = null;
let num2 = null;
let operation
let displayContent=""
let firstNumberFound = false
let hasDecimal = false

function operate(a, operator, b){
    const num1 = Number(a)
    const num2 = Number(b)
    if (operator == "divide"){
        return divide(num1,num2)
    } 
    else if (operator == "minus"){
        return subtract(num1,num2)
    }
    else if (operator == "times"){
        return multiply(num1,num2)
    }
    else if (operator == "plus"){
        return add(num1,num2)
    }
}

const display = document.querySelector("#display")
const digits = document.querySelectorAll(".number")
const operands = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear-button")
const equal = document.querySelector("#equal-sign")
const decimal = document.querySelector("#decimal")


for (let i = 0; i < digits.length; i++){
        digits[i].addEventListener("click", () => {
        if (displayContent.length >= 10){
            displayContent = displayContent
        }
        else if (firstNumberFound = false){
            displayContent += digits[i].value
            display.textContent = displayContent
        }
        else {
            displayContent += digits[i].value
            display.textContent = displayContent
        }
        console.log(num1)
        console.log(num2)
        })
    }



for (let j = 0; j < operands.length; j++){
    operands[j].addEventListener("click", () => {
        if (num1 != null)
        firstNumberFound = true
        num1 = displayContent
        displayContent = ''
        display.textContent = displayContent
        operation = operands[j].value;
    })
}

equal.addEventListener("click", () => {
    if (num1 != null){
        num2 = displayContent
    }
    if (num1 != null && num2 != null){
        displayContent = operate(num1, operation, num2)
        display.textContent = displayContent
    }
})


clear.addEventListener("click", () => {
    displayContent = ''
    display.textContent = displayContent
})

