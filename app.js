let trackInputField = document.getElementById('info');
let remainingChars = document.getElementById('remaining-chars');
// console.dir(inputField);

let maxAllowedChars = trackInputField.maxLength;

function UpdatingRemainingCharsOnInputField(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    let remainingCharsToBeEntered = maxAllowedChars - enteredTextLength;

    remainingChars.textContent = remainingCharsToBeEntered;

};

trackInputField.addEventListener('input', UpdatingRemainingCharsOnInputField);