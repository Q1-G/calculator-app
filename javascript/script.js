const alignmentContainer = document.querySelector('.alignmentContainer')
const screen = document.querySelector('.screen');
const backspace = document.querySelector('.backspace');
const power = document.querySelector('.power');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const multiply =  document.querySelector('.multiply');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const subtract = document.querySelector('.subtract');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const add = document.querySelector('.add');
const change = document.querySelector('.change');
const zero = document.querySelector('.zero');
const point = document.querySelector('.point');
const equals = document.querySelector('.equals');
const buttons = document.querySelector('button');

// ***************eventlisteners***************

zero.addEventListener('click', () => {
    const zeroValue = zero.value;
    screen.textContent += zeroValue;
});

one.addEventListener('click', () => {
    const oneValue = one.value;
    screen.textContent += oneValue;
});

two.addEventListener('click', () => {
    const twoValue = two.value;
    screen.textContent += twoValue;
});

three.addEventListener('click', () => {
    const threeValue = three.value;
    screen.textContent += threeValue;
});

four.addEventListener('click', () => {
    const fourValue = four.value;
    screen.textContent += fourValue;
});

five.addEventListener('click', () => {
    const fiveValue = five.value;
    screen.textContent += fiveValue;
});

six.addEventListener('click', () => {
    const sixValue = six.value;
    screen.textContent += sixValue;
});

seven.addEventListener('click', () => {
    const sevenValue = seven.value;
    screen.textContent += sevenValue;
});

eight.addEventListener('click', () => {
    const eightValue = eight.value;
    screen.textContent += eightValue;
});

nine.addEventListener('click', () => {
    const nineValue = nine.value;
    screen.textContent += nineValue;
});

backspace.addEventListener('click', () => {
    let currentValue = screen.textContent;
    if (currentValue.length > 0) { 
    screen.textContent = currentValue.slice(0, -1)
    }
});

power.addEventListener('click', () => {
    screen.textContent = '';
});

percent.addEventListener('click',() => {
    let currentValue = screen.textContent;
    if (currentValue) { 
        let answer = parseFloat(currentValue) / 100;
        screen.textContent = answer;
    }
});

divide.addEventListener('click', () => {
    const division = divide.value;
    screen.textContent += division;
});

multiply.addEventListener('click',() => {
    const multiplication = multiply.value;
    screen.textContent += multiplication;
});

subtract.addEventListener('click',() => {
    const subtraction = subtract.value;
    screen.textContent += subtraction;
});

add.addEventListener('click',() => {
    const addition = add.value;
    screen.textContent += addition;
});

equals.addEventListener('click', () => {
    let expression = screen.textContent;
    let mathExpression = expression.replace(/÷/g, '/').replace(/x/g, '*');

    try {
        let result = eval(mathExpression);

        screen.textContent = result;
    } catch (error) {
        screen.textContent = 'Error';
    }
});

point.addEventListener('click',() => {
    const dot = point.value;
    screen.textContent += dot;
});

change.addEventListener('click',() => {
    let currentValue = screen.textContent;

    if (currentValue >= 0) { 
        screen.textContent = -currentValue;
    } else if (currentValue < 0) {
        screen.textContent = Math.abs(currentValue);
    }
});