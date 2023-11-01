/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../component/utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput.component";
import "./signup.style.scss";
import  Button from "../button/Button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isPasswordValid(password)) {
      alert("Password should be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="contentForm">
      <div className="imgSignup">
        <img src='' alt=""/>
      </div>
      <div className="formSignUp">
        <h1> Sign up 🐧</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="👩🏻‍💻 Username"
            inputOption={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "displayName",
              value: { displayName },
            }}
          />

          <FormInput
            label="💌 Email"
            inputOption={{
              type: "email",
              required: true,
              onChange: handleChange,
              name: "email",
              value: email,
            }}
          />

          <FormInput
            label="🔑 Password"
            inputOption={{
              type: "password",
              required: true,
              onChange: handleChange,
              name: "password",
              value: password,
            }}
          />

          <FormInput
            label="✅ Confirm Password"
            inputOption={{
              type: "password",
              required: true,
              onChange: handleChange,
              name: confirmPassword,
              value: confirmPassword,
            }}
          />

          <Button type="submit">Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
