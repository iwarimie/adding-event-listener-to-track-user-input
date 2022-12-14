let trackInputField = document.getElementById('info');
let remainingChars = document.getElementById('remaining-chars');
// console.dir(inputField);

let maxAllowedChars = trackInputField.maxLength;

function UpdatingRemainingCharsOnInputField(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    let remainingCharsToBeEntered = maxAllowedChars - enteredTextLength;

    remainingChars.textContent = remainingCharsToBeEntered;

    if (remainingCharsToBeEntered === 0) {
        trackInputField.classList.add('error');
        remainingChars.classList.add('error');
    } else if (remainingCharsToBeEntered <= 10) {
        trackInputField.classList.add('warning');
        remainingChars.classList.add('warning');
        trackInputField.classList.remove('error');
        remainingChars.classList.remove('error');
    } else {
        trackInputField.classList.remove('warning');
        remainingChars.classList.remove('warning');
    }

};

trackInputField.addEventListener('input', UpdatingRemainingCharsOnInputField);