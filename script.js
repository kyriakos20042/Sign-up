const registrationForm = document.querySelector("#form");
registrationForm.addEventListener("click", () => {
    const password = document.querySelector("#pass").value;
    const confirmPassword = document.querySelector("#ConfirmPass").value;
    if(password != confirmPassword) {
        preventDefault();
    }
});