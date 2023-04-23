// Importar funciones que voy a ocupar y exportar
// Register with email, signin with password, signin with google, login

// Autenticación con correo electrónico y contraseña - Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

// Google - Firebase
const provider = new GoogleAuthProvider();

// Acceder con cuenta de Google (popup, ventana emergente)
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

// Acceder mediante redireccionamiento Google
/*
import { signInWithRedirect } from "firebase/auth";

signInWithRedirect(auth, provider);
*/

// Exportar
export { createUserWithEmailAndPassword };













/*
//Importar funciones que voy a ocupar y expor la 
// Register with email, signin with password sigin with google, login


//Autenticación con correo electrónico y contraseña - Firebase

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



  // Google - Firebase

  import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();



//Acceder con cuenta de Google (popup, ventana emergente)

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });



  //Acceder mediante redireccionamiento Google
/*
  import { getAuth, signInWithRedirect } from "firebase/auth";

const auth = getAuth();
signInWithRedirect(auth, provider);*/

/*

// Exportar
export { createUserWithEmailAndPassword };

*/
