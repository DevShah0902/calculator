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
let Operator

function operate(num1, operator, num2){
    if (operator = "+"){
        add(num1,num2)
    } 
    else if (operator = "-"){
        subtract(num1,num2)
    }
    else if (operator = "x"){
        multiply(num1,num2)
    }
    else if (operator = "÷"){
        divide(num1,num2)
    }
}

const display = document.querySelector("#display")
const digits = document.querySelectorAll(".number")

console.log(digits[1].value)
console.log(digits.length)
for (let i = 0; i < digits.length; i++){
    digits[i].addEventListener("click", () => {
        console.log(digits[1].value)
        let displayContent = digits[i].value
        display.textContent += displayContent
    })
}