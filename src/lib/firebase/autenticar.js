import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  query,
  onSnapshot,
  Timestamp,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { firebaseConfig } from './firebase';

initializeApp(firebaseConfig);
const auth = getAuth();

// Función para actualizar el nombre del usuario
async function updateDisplayName(user, nombre) {
  try {
    await updateProfile(user, {
      displayName: nombre,
    });
  } catch (error) {
    // Manejar el error al actualizar el nombre
    // console.log('Error al actualizar el nombre del usuario:', error);
  }
}

export async function createUser(name, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Signed in
    const user = userCredential.user;
    await updateDisplayName(user, name); // Actualizar el nombre del usuario
  } catch (error) {
    // Handle Errors here.
  }
}

export async function loginUser() {
  try {
    // Signed in
  } catch (error) {
    // Handle Errors here.
  }
}

// Google - Firebase
const provider = new GoogleAuthProvider();
export async function signInGoogle() {
  // Acceder con cuenta de Google (popup, ventana emergente)
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    // Handle Errors here.
  }
}

const firestore = getFirestore();

export function createPost(data) {
  return addDoc(collection(firestore, 'post'), {
    text: data,
    email: auth.currentUser.email,
    date: Timestamp.now(),
    name: auth.currentUser.displayName,
  });
}
export function verPosts(callback) {
  const queryPost = query(collection(firestore, 'post'), orderBy('date', 'desc'));
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

// EDITAR POST
export async function editPost(postId, newData) {
  const postRef = doc(firestore, 'post', postId);
  await updateDoc(postRef, newData);
}

// BORRAR POST
export async function deletePost(postId) {
  await deleteDoc(doc(firestore, 'post', postId));
}

// Verificar que usuario actual se autor del post
export function isAuthor(post) {
  return auth.currentUser && post.email === auth.currentUser.email;
}
