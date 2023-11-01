/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";

import FormInput from "../form-input/FormInput.component";
import "./SignInForm.scss";
import Button from "../button/Button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          alert("Incorrect password or Email ");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error.message);
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
        <img src="" alt="" />
      </div>
      <div className="formSignUp">
        <h1> SignIn 🐧</h1>
        <form onSubmit={handleSubmit}>
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

          <p>
            Dont have account ?{" "}
            <a href="/signup">
              <b className="text-danger">Sign up here!</b>
            </a>
          </p>
          <Button buttonType="confirm" type="submit">
            Sign In
          </Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
