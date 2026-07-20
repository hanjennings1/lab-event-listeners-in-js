// Handle Button Clicks

// Function to change the background color when a button is clicked (tests want color in rgb)
function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgb(204, 172, 212)";
}

// Function to reset the background color when the body is double-clicked (tests want empty string not a value)
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input:
// Function to display the key pressed by the user (tests want it to say "key pressed: ___")
// also added multi-use if key is "Tab" -> reset background color
function displayKeyPress(event) {
  document.getElementById("keyPressDisplay").textContent = `Key pressed: ${event.key}`;
    if (event.key === 'Tab') {
      resetBackgroundColor()
    }
}

// Process Text Input:
// Function to display user input in real-time
function displayUserInput() {
  document.getElementById("textInputDisplay").textContent = `You typed: ${document.getElementById("textInput").value}`
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)

  document.getElementById('changeColorButton').addEventListener('mouseover', () => {
    document.getElementById('changeColorButton').style.backgroundColor = 'yellow';
});

  document.getElementById('changeColorButton').addEventListener('mouseout', () => {
    document.getElementById('changeColorButton').style.backgroundColor = 'initial';
});
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}



 // MODULE EXPORTS:
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}

