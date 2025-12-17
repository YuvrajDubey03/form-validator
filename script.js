let form = document.querySelector('#form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

let emailError = document.querySelector('#emailError');
let passwordError = document.querySelector('#passwordError');
let resultMessage = document.querySelector('#resultMessage');

function resetUI() {
    resultMessage.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    email.parentElement.classList.remove("error", "success");
    password.parentElement.classList.remove("error", "success");
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    resetUI();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailValid = emailRegex.test(email.value);
    let passwordValid = passwordRegex.test(password.value);

    if (!emailValid) {
        emailError.textContent = "Please enter a valid email address";
        email.parentElement.classList.add("error");
    } else {
        email.parentElement.classList.add("success");
    }

    if (!passwordValid) {
        passwordError.textContent =
            "Password must be 8+ chars with uppercase, lowercase, number & special char";
        password.parentElement.classList.add("error");
    } else {
        password.parentElement.classList.add("success");
    }

    if (emailValid && passwordValid) {
        resultMessage.style.color = "green";
        resultMessage.textContent = "Form validated successfully ✅";

        console.log("Email:", email.value);
        console.log("Password:", password.value);

        email.value = "";
        password.value = "";

        email.parentElement.classList.remove("success");
        password.parentElement.classList.remove("success");
    }
});

// 🔥 reset message as soon as user types
email.addEventListener("input", resetUI);
password.addEventListener("input", resetUI);
