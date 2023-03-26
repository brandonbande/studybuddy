import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBD-X2-j8_w8-owIls1SMAPbbsNFb83B40",
    authDomain: "studybuddy-d89a8.firebaseapp.com",
    projectId: "studybuddy-d89a8",
    storageBucket: "studybuddy-d89a8.appspot.com",
    messagingSenderId: "286368335204",
    appId: "1:286368335204:web:fb0ed0e0e719cc256e2671",
    measurementId: "G-315YFP813Z"
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