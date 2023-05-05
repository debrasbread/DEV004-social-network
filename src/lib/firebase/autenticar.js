export { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import{firebaseConfig} from './firebase'

// NUEVO - FIRESTORE
import { addDoc, collection, getFirestore, query, onSnapshot } from "firebase/firestore";


// Autenticación con correo electrónico y contraseña - Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

export async function loginUser(email, password){
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
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

const firestore = getFirestore();

export function createPost(data) {
  return addDoc(collection(firestore, "post"), {
    text: data,
    email: auth.currentUser.email
  });
}


export function verPosts(callback) {
  const queryPost = query(collection(firestore, "post"));
  onSnapshot(queryPost, callback);
}



// OBTENER EL USUARIO QUE ACCEDIÓ

export const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
} else {
  // No user is signed in.
}


// OBTENER PERFIL DE UN USUARIO

export const getUserProfile = () => {
  return new Promise((resolve, reject) => {
    const user = auth.currentUser;
  
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
  
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
  
      resolve({
        displayName,
        email,
        photoURL,
        emailVerified,
        uid
      });
    } else {
      reject(new Error('No hay usuario autenticado'));
    }
  });
};
