/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/FormInput.component";
import "./signup.style.scss";
import Button from "../button/Button.component";

// Initialize default form fields
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Define the SignUpForm component
const SignUpForm = () => {
  // State management using useState
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // Function to reset form fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Attempt to create a user with email and password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // Create a user document with user information
      await createUserDocumentFromAuth(user, { displayName });
      alert("Sign up Complete ✅");
      // Reset the form fields
      resetFormFields();
    } catch (error) {
      // Handle different types of errors
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error", error);
      }
    }
  };

  // Function to handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // JSX rendering
  return (
    <div className="bg-page">
      <div className="contentForm">
        <div className="imgSignup">
          <img src="" alt="" />
        </div>
        <div className="formSignUp">
          <h1> Sign up 🐧</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="👩🏻‍💻 Username"
              type="text"
              required
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />

            <FormInput
              label="💌 Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              value={email}
            />

            <FormInput
              label="🔑 Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            />

            <FormInput
              label="✅ Confirm Password"
              type="password"
              required
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />
            <p>
              Already have account ?{" "}
              <a href="/auth">
                <b className="text-danger">Sign in here!</b>
              </a>
            </p>
            <Button buttonType="confirm" type="submit">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Export the SignUpForm component
export default SignUpForm;
