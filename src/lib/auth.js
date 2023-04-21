import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth();

export const signInWithEmail = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("funciona")
        // Signed in
        const user = userCredential.user;
        console.log(user)
        onNavigate("/muro");
        // ...
      })
      .catch((error) => {
        console.log("error")
        const errorCode = error.code;
        const errorMessage = error.message;
        
      });
    
}

export const createUser = (emailR, passwordR)=>{
   return createUserWithEmailAndPassword(auth, emailR, passwordR)
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
}

export const exit = () => signOut(auth)