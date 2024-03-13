const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");
const eye = document.querySelector("#eye");
const cEye = document.querySelector("#cEye");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

eye.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    password.type = "password";
    eye.classList.add("fa-eye-slash");
    eye.classList.remove("fa-eye");
  }
};
cEye.onclick = function () {
  if (cPassword.type === "password") {
    cPassword.type = "text";
    cEye.classList.remove("fa-eye-slash");
    cEye.classList.add("fa-eye");
  } else {
    cPassword.type = "password";
    cEye.classList.add("fa-eye-slash");
    cEye.classList.remove("fa-eye");
  }
};

const setError = (element, message) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector(".error");
  errorDisplay.innerText = message;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
};

const setSuccess = (element) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector(".error");
  errorDisplay.innerText = "";
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
};

const isValidEmail = (emailValue) => {
  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;
  return emailRegex.test(emailValue);
};

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cPasswordValue = cPassword.value.trim();
  let success = true;
  if (userNameValue === "") {
    success = false;
    setError(userName, "Name is required");
  } else {
    setSuccess(userName);
  }
  if (emailValue === "") {
    success = false;

    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    success = false;

    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    success = false;

    setError(password, "Password is required");
  } else if (passwordValue.length <= 8) {
    success = false;
    setError(password, "password must be at least 8 characters");
  } else {
    setSuccess(password);
  }
  if (cPasswordValue === "") {
    success = false;

    setError(cPassword, "Confirm Password is required");
  } else if (cPasswordValue !== passwordValue) {
    success = false;

    setError(cPassword, "password doesn't match");
  } else {
    setSuccess(cPassword);
  }

  return success;
};
