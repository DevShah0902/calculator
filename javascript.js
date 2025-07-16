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

let num1
let num2
let operation
let displayContent=""
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
for (let i = 0; i < digits.length; i++){
        digits[i].addEventListener("click", () => {
            displayContent += digits[i].value
            display.textContent = displayContent
            
        })
    }



for (let j = 0; j < operands.length; j++){
    operands[j].addEventListener("click", () => {
            num2 = num1;
            num1 = displayContent;
        if (num1 != null){
            displayContent = ''
            operation = operands[j].value
            if (num1 != null && num2 != null){
                displayContent = operate(num1, operation, num2)
                display.textContent = displayContent
                
            } 
        }
    })
}

equal.addEventListener("click", () => {
    num2 = num1;
        num1 = displayContent;
        displayContent = ''
        if (num1 != null && num2 != null){
            displayContent = operate(num1, operation, num2)
            display.textContent = displayContent
            num1 = null;
            num2 = null;
        } 
    })

clear.addEventListener("click", () => {
    display.textContent = null;
    displayContent = '';
    num1 = null;
    num2 = null;
})



    