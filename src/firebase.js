// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const firebaseRegister = async (email, password) =>{
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
    return user
}

export const firebaseLogin = async ( email, password) =>{
    const {user} = await signInWithEmailAndPassword(auth, email, password)
    return user
}

export const firebase_logout = async () =>{
    await signOut(auth)
    return true
}

export default app;