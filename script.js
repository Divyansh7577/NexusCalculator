const display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearAll() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

function calculateResult() {
    try {
        let expression = display.innerText.replace('×', '*').replace('÷', '/');
        let result = eval(expression);
        
        if (result === Infinity || isNaN(result)) {
            display.innerText = "Error";
        } else {
            display.innerText = parseFloat(result.toFixed(6));
        }
    } catch (error) {
        display.innerText = "Error";
    }
}
