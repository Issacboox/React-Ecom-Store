/* eslint-disable no-unused-vars */
import "./signIn.style.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { Link } from "react-router-dom";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div className="bg-page">
    <div className="content">
      <div className="img-form">
      <img src="https://st3.depositphotos.com/15583058/19482/i/450/depositphotos_194828412-stock-photo-full-frame-image-green-leaves.jpg" alt="form img"/>
      </div>
      <div className="loginForm">
        <h1>Sign In Page</h1>
        <form>
          <label>Username 🐧</label>
          <input type='text' />
          <label>Password 🔑</label>
          <input type='password' />
        </form>
        <p className="ms-2 mt-1">Dont have account yet? <a className="text-danger" href="/signup"><b>Sign up here</b></a></p>
        <button onClick={logGoogleUser}>
          Sign In with Google
        </button>
        <Link to="/" className="linkbtn">Sign In</Link>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
