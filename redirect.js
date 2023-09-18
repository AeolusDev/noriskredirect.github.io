// Get references to HTML elements
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
const output = document.getElementById('output');
const pass = "Mzc2NQ=="; //PS: I don't use this anywhere else so don't think you got my passcode.
let decodedpass = atob(pass);
// Add an event listener to the submit button
submitButton.addEventListener('click', function() {
    // Get the value from the input field
    const inputValue = userInput.value;
    
    // Display the input value
    if(inputValue === decodedpass) {
        window.history.back();
        console.log("Operation Complete!");
    }
});
