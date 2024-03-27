const registrationForm = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

const inputPassword = document.querySelector("#pass");
const passwordText = document.querySelector("#passwordCheck");

registrationForm.addEventListener("click", () => {
    const password = document.querySelector("#pass").value;
    const confirmPassword = document.querySelector("#ConfirmPass").value;
    if(password != confirmPassword) {
        event.preventDefault();
        submitButton.addEventListener("click", () => {
            passwordShowText();
        });
    }
});

function passwordShowText() {
    inputPassword.style.border = "1px solid red";
    confirmPasswor.style.border = "1px solid red";
    passwordText.textContent = "* Passwords do not match";
}

function passwordShowDefault() {
    inputPassword.style.border = "1px solid #ccc";
    confirmPasswor.style.border = "1px solid #ccc";
    passwordText.textContent = "";
}