/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
// direct to db in console
export const db = getFirestore();

//Add collection to db
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) =>{
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  });

  await batch.commit();
  console.log('done')
};

export const getCatagoriesAndDocuments = async () => {
  const collectionRef  = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items ;
    return acc;
  }, {});

  return categoryMap;
}


export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const UserDocRef = doc(db, "users", userAuth.uid);
  console.log(UserDocRef);

  const userSnapshot = await getDoc(UserDocRef);
  //   console.log(userSnapShot);
  //   console.log(userSnapShot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(UserDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return UserDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);
export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
