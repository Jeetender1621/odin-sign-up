const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const createBtn = document.querySelector(".create-account");
const form = document.querySelector("form");

createBtn.addEventListener('click', clickEvent);

function clickEvent(event) {
    event.preventDefault(); // Prevent form submission

    const errorParagraph = document.createElement("p");
    errorParagraph.textContent = "*Passwords do not match";
    errorParagraph.style.color = "red";
    errorParagraph.style.fontSize = "0.8rem";

    if (password.value !== confirmPassword.value || password.value === '' || confirmPassword.value === '') {
        password.style.borderColor = "red";
        password.after(errorParagraph);
        confirmPassword.style.borderColor = "red";

    } else {
        password.style.borderColor = ""; // Reset border color
        confirmPassword.style.borderColor = ""; // Reset border color
        
        // Submit the form
        form.submit(); // This will submit the form
    }
}