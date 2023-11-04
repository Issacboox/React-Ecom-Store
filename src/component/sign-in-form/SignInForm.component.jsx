/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput.component";
import { ButtonsContainer } from "./SignInForm.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component.jsx";

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
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
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
          {/* <Button buttonType="confirm" type="submit">
            Sign In
          </Button> */}
          <ButtonsContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.confirm}>Sign In</Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.googles}
              type="button"
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </ButtonsContainer>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
