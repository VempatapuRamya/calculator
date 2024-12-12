let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}
function toggleSign() {
    if (display.value) {
        if (display.value[0] === '-') {
            display.value = display.value.substring(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
