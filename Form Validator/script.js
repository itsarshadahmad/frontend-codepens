const form = document.getElementById("form");
const password1Element = document.getElementById("password1");
const password2Element = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using constraint API
    isValid = form.checkValidity();
    // If the form isn't valid
    if (!isValid) {
        // Style mainmessage for an error
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }
    // Check to see if passwords match
    if (password1Element.value === password2Element.value) {
        // If they match, set value to true and borders to green
        passwordsMatch = true;
        password1Element.style.borderColor = "green";
        password2Element.style.borderColor = "green";
    } else {
        // If they don't match, border color of input to red, change message
        passwordsMatch = false;
        message.textContent = "Make sure passwords match.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password1Element.style.borderColor = "red";
        password2Element.style.borderColor = "red";
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        // Style main message for success
        message.textContent = "Successfully Registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    console.log(user);
}

function processFormData(event) {
    event.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener("submit", processFormData);
