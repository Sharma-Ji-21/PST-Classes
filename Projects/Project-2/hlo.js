let problem = [];

function updateDisplay() {
    document.querySelector("input").value = problem.join("");
}

function value(num) {
    problem.push(num);
    updateDisplay();
}


function add() {
    problem.push("+");
    updateDisplay();
}

function subtract() {
    problem.push("-");
    updateDisplay();
}

function multiply() {
    problem.push("*");
    updateDisplay();
}

function divide() {
    problem.push("/");
    updateDisplay();
}
function erase(){
    problem.pop();
    updateDisplay();
}

function calculate() {
    let expression = problem.join("");
    let result = eval(expression);
    document.querySelector("input").value = result;
    problem = [result];
}

function clearInput() {
    problem = [];
    updateDisplay();
}
