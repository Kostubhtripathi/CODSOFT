/* CODE BY KAUSTUBH TRIPATHI */
// Get references to the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "0"; // To store the current user input
let operator = ""; // To store the current operator
let prevInput = "0"; // To store the previous input for calculation

// Function to update the display
function updateDisplay() {
  display.textContent = currentInput;
}

// Function to handle number and operator button clicks
function handleButtonClick(buttonValue) {
  if (Number.isInteger(parseInt(buttonValue))) {
    // Handle digit input
    if (currentInput === "0") {
      currentInput = buttonValue;
    } else {
      currentInput += buttonValue;
    }
  } else {
    // Handle operator input
    if (buttonValue === "C") {
      // Clear button is clicked
      currentInput = "0";
      prevInput = "0";
      operator = "";
    } else if (buttonValue === "=") {
      // Equals button is clicked, perform calculation
      const result = calculate(parseFloat(prevInput), operator, parseFloat(currentInput));
      currentInput = result.toString();
      operator = "";
    } else {
      // Other operator buttons are clicked
      prevInput = currentInput;
      currentInput = "0";
      operator = buttonValue;
    }
  }

  updateDisplay();
}

// Function to perform calculation
function calculate(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
}

// Attach event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonClick(button.textContent);
  });
});
