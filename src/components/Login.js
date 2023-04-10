import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import 'dotenv/config';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Login = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        localStorage.setItem('user', JSON.stringify(authUser));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });
  }, []);

  const handleSignIn = () => {
    signInWithGoogle();
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem('user');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {user ? (
        <div>
          <p>You are logged in as {user.displayName}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in to continue</p>
          <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
};

export default Login;