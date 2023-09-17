// Get references to HTML elements
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
const output = document.getElementById('output');
const pass = "7548";
// Add an event listener to the submit button
submitButton.addEventListener('click', function() {
    // Get the value from the input field
    const inputValue = userInput.value;
    
    // Display the input value
    if(inputValue === pass) {
        window.history.back();
    }
});
