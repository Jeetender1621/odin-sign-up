const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const createBtn = document.querySelector(".create-account");
const form = document.querySelector("form"); // Assuming there's only one form on the page
let errorParagraph; // Declare error paragraph outside the event listener

createBtn.addEventListener('click', clickEvent);

function clickEvent(event) {
    event.preventDefault(); // Prevent form submission
    
    // Check if passwords match and are not empty
    if (password.value !== confirmPassword.value || password.value === '' || confirmPassword.value === '') {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        
        // Create and append error paragraph only if it doesn't exist
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.textContent = "Passwords do not match";
            errorParagraph.style.color = "red";
            errorParagraph.style.fontSize = "small";
            password.after(errorParagraph);
        }
    } else {
        // Check if other form fields are filled
        const formFields = form.querySelectorAll("input:not([type='submit'])");
        let allFieldsFilled = true;
        formFields.forEach(field => {
            if (field.value === '') {
                allFieldsFilled = false;
                field.style.borderColor = "red";
            } else {
                field.style.borderColor = ""; // Reset border color
            }
        });
        
        // If all fields are filled, remove error paragraph and submit the form
        if (allFieldsFilled) {
            if (errorParagraph) {
                errorParagraph.remove();
                errorParagraph = null; // Reset the error paragraph variable
            }
            form.submit(); // Submit the form
        }
    }
}
