const buttonsEl = document.querySelectorAll('button');
const inputFieldEl = document.querySelector('#result');

buttonsEl.forEach((element) => {
    element.addEventListener('click', () => {
        const buttonValue = element.textContent;

        if (buttonValue === 'C') {
            clearResults();
        } else if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'Del') {
            deleteLast();
        } else {
            appendResult(buttonValue);
        }
    });
});

function clearResults() {
    inputFieldEl.value = '';
}

function calculateResult() {
    try {
        const result = new Function('return ' + inputFieldEl.value)();
        inputFieldEl.value = result;
    } catch (error) {
        inputFieldEl.value = 'Error';
    }
}

function deleteLast() {
    if (inputFieldEl.value === 'Error') {
        inputFieldEl.value = '';
    }
    inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}

function appendResult(buttonValue) {
    const operators = { '÷': '/', 'x': '*' };
    inputFieldEl.value += operators[buttonValue] || buttonValue;
}


// function calculateResult() {
//     try {
//         const result = safeEval(inputFieldEl.value);
//         inputFieldEl.value = result;
//     } catch (error) {
//         inputFieldEl.value = 'Error';
//     }
// }

// function safeEval(expression) {
//     // Define a set of allowed characters and operators
//     const allowedChars = '0123456789.+-*/()';

//     // Check if the expression contains only allowed characters
//     const isValidExpression = [...expression].every(char => allowedChars.includes(char));

//     if (!isValidExpression) {
//         throw new Error('Invalid expression');
//     }

//     // Use the Function constructor to create a function from the expression
//     const func = new Function(`return ${expression}`);

//     // Call the function to get the result
//     const result = func();

//     // Check if the result is a finite number
//     if (!isFinite(result)) {
//         throw new Error('Invalid result');
//     }

//     return result;
// }
