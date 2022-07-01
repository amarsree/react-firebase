/* import * as firebaseui from 'firebaseui'   */
import firebase from 'firebase/compat/app';
/*  import 'firebaseui/dist/firebaseui.css'  */
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,RecaptchaVerifier  } from "firebase/auth";
import React from 'react'
const auth = getAuth();

function loginHandler(e) {
 createUserWithEmailAndPassword(auth, 'amarsree007143@asdf.com1', 'password')
    .then((userCredential) => {
        console.log(userCredential)
        const user = userCredential.user;
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log('dd', errorMessage)
    });
 
    
}

function logoutHandler(e) {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log( user.email)
            // ...
        } else {
            // User is signed out
            // ...
        }
    })
}

function Login() {
    return (
        <div>
            <button onClick={loginHandler} > Login</button>
            <button onClick={logoutHandler} >Logout</button>
        </div>
    )
}

export default Login