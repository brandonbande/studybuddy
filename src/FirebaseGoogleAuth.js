import React from 'react'
import { signInWithGoogle } from './firebase-config'

function FirebaseGoogleAuth() {
  return (
    <div>
         <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
    </div>
  )
}

export default FirebaseGoogleAuth