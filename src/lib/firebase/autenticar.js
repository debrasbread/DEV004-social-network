export { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import{firebaseConfig} from './firebase'

// Autenticación con correo electrónico y contraseña - Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeApp(firebaseConfig);
const auth = getAuth();


export async function createUser(email, password){
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Signed in
    const user = userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
  
}


// Google - Firebase
const provider = new GoogleAuthProvider();
export async function signInGoogle(){
// Acceder con cuenta de Google (popup, ventana emergente)
  try {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential_1 = GoogleAuthProvider.credentialFromError(error);
  }
}


// Acceder mediante redireccionamiento Google

// import { signInWithRedirect } from 'firebase/auth';

// signInWithRedirect(auth, provider);
