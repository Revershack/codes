const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByTagName('button'));
const clear = document.getElementById('clear');

let currentOperand = '';
let previousOperand = '';
let operation = null;

buttons.map( button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        if(buttonText === 'C') {
            currentOperand = '';
            previousOperand = '';
            operation = null;
            display.value = '';
            return;
        }
        if(buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            operation = buttonText;
            previousOperand = currentOperand;
            currentOperand = '';
            return;
        }
        if(buttonText === '=') {
            const calculation = eval(previousOperand + operation + currentOperand);
            display.value = calculation;
            previousOperand = '';
            operation = null;
            currentOperand = '';
            return;
        }
        currentOperand = currentOperand.toString() + buttonText.toString();
        display.value = currentOperand;
    });
});