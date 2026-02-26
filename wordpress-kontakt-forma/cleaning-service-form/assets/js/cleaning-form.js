// Cleaning service form JavaScript code

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault()
  // Code to process form data
  console.log("Form submitted")
}

// Attach event listener to form
document.getElementById("cleaning-form").addEventListener("submit", handleSubmit)

// Function to validate form inputs
function validateForm() {
  // Code to validate form inputs
  console.log("Form validated")
}

// Attach event listener to form inputs for validation
const inputs = document.querySelectorAll("#cleaning-form input")
inputs.forEach((input) => {
  input.addEventListener("input", validateForm)
})

// Additional JavaScript code can be added here
