/* eslint-disable no-unused-vars */
import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }
    return (
        <>
          <h1>Sign In Page</h1>
        <button onClick={logGoogleUser} style={{backgroundColor:'red'}}>Sign In with Google</button>
        </>
      
    );
}

export default SignIn