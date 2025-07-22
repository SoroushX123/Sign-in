# Sign-in 
# 📋 Registration Form

A modern, responsive registration form built with **HTML**, **CSS**, and **JavaScript**, featuring real-time field validation and friendly UI feedback.

## 🧪 Live Demo

👉 [Try it here](https://SoroushX123.github.io/Sign-in/)  
> Replace `your-username` with your actual GitHub username.

## ✨ Features

- Input fields for full name, email, password, phone number, and terms checkbox
- Built-in validation for:
  - Email format
  - Password strength & match
  - Phone number format (Iranian mobile format: starts with 09 and is 11 digits)
  - Full name length and characters
- Friendly error messages and success confirmation
- Responsive design with clean layout and simple styling
- No frameworks or libraries—just vanilla HTML, CSS & JS

## 🧠 Validation Logic

JavaScript checks inputs using regular expressions and field comparisons:
- Password requires upper/lowercase, digits, and minimum 8 characters
- Phone must match pattern `09XXXXXXXXX`
- Confirm password must match password field
- Terms checkbox must be checked before submission
