/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA07zkdo3e_WtUYRXXHU5c2CqCkln3neOs",
  authDomain: "beanstore-db.firebaseapp.com",
  projectId: "beanstore-db",
  storageBucket: "beanstore-db.appspot.com",
  messagingSenderId: "1076004065498",
  appId: "1:1076004065498:web:60d41f2f8cc9dd322855e3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// direct to db in console
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const UserDocRef = doc(db, "users", userAuth.uid);
  console.log(UserDocRef);

  const userSnapShot = await getDoc(UserDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(UserDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log("error craeting user", error.message);
    }
  }
  // if user data exist
  return UserDocRef;
  //return userDoc
};
