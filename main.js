const form = document.getElementById("form")
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telNumber = document.getElementById("telNumber");
const confirmPassword= document.getElementById("con_password");

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInput();
})

const setError = (element, msg) => {
    const parent = element.parentElement;
    console.log("parent", parent)
    const display = parent.querySelector(".display_error")
    display.innerHTML = msg
    console.log("display", display)
    parent.classList.add("error")
    parent.classList.remove("success")
}
const setSuccess = (element, msg) => {
    const parent = element.parentElement;

    const display = document.querySelector(".display_error")
    console.log(display)
    display.innerHTML = ''
    parent.classList.remove("error")
    parent.classList.add("success")
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInput = () => {
    const firstNameValue = firstName.value.trim();
    console.log(firstNameValue)
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = confirmPassword.value.trim();

    if (firstNameValue === "") {
        setError(firstName, "First Name required")
    }
    else {
        setSuccess(firstName)
    }

    if (lastNameValue === "") {
        setError(lastName, "Last Name required")
    }
    else {
        setSuccess(lastName)
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(confirmPassword, "Passwords doesn't match");
    } else {
        setSuccess(confirmPassword);
    }
}