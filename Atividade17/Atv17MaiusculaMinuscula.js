const textInput = document.getElementById('textInput');
const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
const lowercaseCheckbox = document.getElementById('lowercaseCheckbox');

textInput.addEventListener('input', () => {
    if (uppercaseCheckbox.checked) {
        textInput.value = textInput.value.toUpperCase();
    } else if (lowercaseCheckbox.checked) {
        textInput.value = textInput.value.toLowerCase();
    }
});

uppercaseCheckbox.addEventListener('change', () => {
    if (uppercaseCheckbox.checked) {
        textInput.value = textInput.value.toUpperCase();
    }
});

lowercaseCheckbox.addEventListener('change', () => {
    if (lowercaseCheckbox.checked) {
        textInput.value = textInput.value.toLowerCase();
    }
});