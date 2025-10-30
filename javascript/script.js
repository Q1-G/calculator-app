const casing = document.getElementsByClassName('casing');

const buttons = document.getElementsByClassName('buttons');



let num1 = 0;
let num2 = 0;
let opperators = ["/","*","+","-"];

function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2   
}

function divide(num1,num2){
    return num1 / num2
}

function display(){}

buttons.addEventListner("click",display);