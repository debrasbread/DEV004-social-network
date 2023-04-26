import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider,  signInWithRedirect  } from "firebase/auth";
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

export const provider = new GoogleAuthProvider();

export const loginGoogle = () => {
return signInWithPopup(auth, provider)
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
};
 
// getRedirectResult(auth)
//   .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access Google APIs.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;

  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });

