import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
require('dotenv').config();


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  export const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        })
        .catch((error) => {
        console.log(error);
        });
    };