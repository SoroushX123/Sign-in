const form = document.getElementById("registerForm");
const successMessage = document.getElementById("formSuccess");

const fields = {
  fullname: {
    input: document.getElementById("fullname"),
    validate: (val) => /^[a-zA-Z\s]{3,}$/.test(val),
    error:
      "Full name must be at least 3 letters and contain only alphabetic characters.",
  },
  email: {
    input: document.getElementById("email"),
    validate: (val) => /^\S+@\S+\.\S+$/.test(val),
    error: "Invalid email address.",
  },
  password: {
    input: document.getElementById("password"),
    validate: (val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(val),
    error:
      "Password must be at least 8 characters with uppercase, lowercase, and a number.",
  },
  confirmPassword: {
    input: document.getElementById("confirmPassword"),
    validate: (val) => val === document.getElementById("password").value,
    error: "Passwords do not match.",
  },
  phone: {
    input: document.getElementById("phone"),
    validate: (val) => /^09\d{9}$/.test(val),
    error: "Phone number must start with 09 and be 11 digits.",
  },
  terms: {
    input: document.getElementById("terms"),
    validate: (val) => val === true,
    error: "You must accept the terms and conditions.",
  },
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  successMessage.textContent = "";

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    const value =
      key === "terms" ? field.input.checked : field.input.value.trim();
    const errorDiv = field.input.parentElement.querySelector(".error-message");

    if (!field.validate(value)) {
      errorDiv.textContent = field.error;
      isValid = false;
    } else {
      errorDiv.textContent = "";
    }
  });

  if (isValid) {
    successMessage.textContent = "🎉 Registration successful!";
    form.reset();
  }
});
