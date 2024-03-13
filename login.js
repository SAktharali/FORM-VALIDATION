const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const eye = document.querySelector("#eye");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

eye.onclick = () => {
  if (password.type === "password") {
    password.type = "text";
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
  } else {
    password.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
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

  return success;
};
