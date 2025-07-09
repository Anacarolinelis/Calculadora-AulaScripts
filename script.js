let expression = '';

const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');
const themeSelector = document.getElementById('theme');

buttons.forEach(button => {
  const value = button.dataset.value;
  const action = button.dataset.action;

  button.addEventListener('click', () => {
    if (action === 'clear') {
      clearDisplay();
    } else if (action === 'backspace') {
      backspace();
    } else if (action === 'calculate') {
      calculateResult();
    } else if (value !== undefined) {
      appendToDisplay(value);
    }
  });
});

themeSelector.addEventListener('change', changeTheme);

function appendToDisplay(value) {
  expression += value;
  expressionDisplay.textContent = expression;
  resultDisplay.textContent = '';
}

function clearDisplay() {
  expression = '';
  expressionDisplay.textContent = '0';
  resultDisplay.textContent = '= 0';
}

function backspace() {
  const current = expressionDisplay.textContent;
  if (current.length > 1) {
    expressionDisplay.textContent = current.slice(0, -1);
  } else {
    expressionDisplay.textContent = "0";
  }
}

function calculateResult() {
  try {
    const result = eval(expression);
    resultDisplay.textContent = '= ' + result;
  } catch {
    resultDisplay.textContent = 'Erro';
  }
}

function changeTheme() {
  const selectedTheme = themeSelector.value;
  document.body.classList.toggle('light-theme', selectedTheme === 'light');
  document.body.classList.toggle('dark-theme', selectedTheme === 'dark');
}

// Inicialização ao carregar a página
window.onload = () => {
  document.body.classList.add('dark-theme');
  expressionDisplay.textContent = '0';
  resultDisplay.textContent = '= 0';
  themeSelector.value = 'dark';
};
