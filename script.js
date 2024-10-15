function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}

function calculateInterest() {
    const principal = parseFloat(prompt("Valor principal:"));
    const rate = parseFloat(prompt("Taxa de juros (%):"));
    const interest = (principal * rate ) / 100;
    alert("Juros: " + interest);
}

function calculateInstallments() {
    const principal = parseFloat(prompt("Valor do empréstimo:"));
    const rate = parseFloat(prompt("Taxa de juros (%):")) / 100 / 12;
    const months = parseInt(prompt("Número de meses:"));
    const installment = (principal * rate) / (1 - Math.pow(1 + rate, -months));
    alert("Mensalidade: " + installment.toFixed(2));
}
let currentInput = "0";

function appendToDisplay(value) {
    if (currentInput === "0" && !isNaN(value)) {
        currentInput = value; // Substitui o 0 inicial se um número for digitado
    } else {
        currentInput += value; // Adiciona o valor ao input atual
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0"; // Limpa o display e retorna ao 0
    updateDisplay();
}

function backspace() {
    if (currentInput.length === 1) {
        currentInput = "0"; // Se apenas um número, retorna ao 0
    } else {
        currentInput = currentInput.slice(0, -1); // Remove o último caractere
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

// Funções adicionais para cálculo, juros, e mensalidades podem ser implementadas aqui
