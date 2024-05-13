// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Authentication SDK
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";

// Firestore SDK
import { arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOV1Bq7iylU3h9DAm9ZflRjgj-tt4Y9mw",
  authDomain: "to-do-list-224cb.firebaseapp.com",
  projectId: "to-do-list-224cb",
  storageBucket: "to-do-list-224cb.appspot.com",
  messagingSenderId: "481756041238",
  appId: "1:481756041238:web:75c8126dfb4176af06a537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Preparing auth and firestore to use in our app
export const auth = getAuth(app);
export const db = getFirestore(app);

// Email&Password Authentication
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Sending auth with email & pass
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};


// Creating user with authentication
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        notes: [],
        ...additionalInformation
      });
      await updateProfile(userAuth, {
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

// Sign out user from auth
export const signOutUser = async () => await signOut(auth);

// Check Authentication State Change
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

// Add note to Firestore database
export const addUserNotesToFirestore = async (uid, formFields) => {
  if (!uid) return;

  const userDocRef = doc(db, 'users', uid);
  await updateDoc(userDocRef,{notes: arrayUnion(formFields)});

  return userDocRef;
}