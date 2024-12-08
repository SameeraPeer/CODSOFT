const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operatorUsed = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value === "C") {
            currentInput = "";
            updateDisplay("0");
        } else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1) || "0";
            updateDisplay(currentInput);
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                updateDisplay(currentInput);
            } catch (e) {
                updateDisplay("Error");
                currentInput = "";
            }
        } else {
            if (operatorUsed && isOperator(value)) return;
            currentInput += value;
            updateDisplay(currentInput);
            operatorUsed = isOperator(value);
        }
    });
});

function updateDisplay(value) {
    display.textContent = value || "0";
}

function isOperator(char) {
    return ["+", "-", "*", "/", "×", "÷"].includes(char);
}
