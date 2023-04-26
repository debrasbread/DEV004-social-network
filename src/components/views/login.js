import { signInGoogle } from '../../lib/firebase/autenticar';
import {onNavigate} from '../../lib/router/index';

/*
//Firebase

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  */

export function login() {
  // Creación de main y asignación a variable container
  const containerLogin = document.createElement('main');

  // Imagen de fondo
  const backgroundImgLogin = document.createElement('img');
  backgroundImgLogin.classList.add('backgroundImgL');
  containerLogin.appendChild(backgroundImgLogin);

  // Contenedor de elementos
  const contenedorGeneralLogin = document.createElement('main');
  contenedorGeneralLogin.id = 'contenedor-GeneralL';
  contenedorGeneralLogin.classList.add('contenedorGeneralL');
  containerLogin.appendChild(contenedorGeneralLogin);

  // Logo
  const logoLogin = document.createElement('img');
  logoLogin.classList.add('logoL');
  logoLogin.src = '../imagenes/logo-marchantes.png';
  contenedorGeneralLogin.appendChild(logoLogin);

  // Texto "Iniciar sesión"
  const iniciarSesionLogin = document.createElement('h1');
  iniciarSesionLogin.id = 'iniciarSesionL';
  iniciarSesionLogin.classList.add('iniciarSesionL');
  iniciarSesionLogin.textContent = 'Iniciar sesión';
  contenedorGeneralLogin.appendChild(iniciarSesionLogin);

  // Texto "Email" + label + input
  const emailLabelLogin = document.createElement('label');
  emailLabelLogin.setAttribute('for', 'email-InputL');
  emailLabelLogin.id = 'email-LabelL';
  emailLabelLogin.textContent = 'Email:';
  emailLabelLogin.classList.add('emailLabelL');
  contenedorGeneralLogin.append(emailLabelLogin);

  const emailInputLogin = document.createElement('input');
  emailInputLogin.setAttribute('id', 'email-InputL');
  emailInputLogin.setAttribute('type', 'email');
  emailInputLogin.classList.add('emailInputL');
  contenedorGeneralLogin.append(emailInputLogin);

  // Texto "Contraseña" + label + input
  const contraseñaLabelLogin = document.createElement('label');
  contraseñaLabelLogin.textContent = 'Contraseña:';
  contraseñaLabelLogin.setAttribute('for', 'contraseña-InputL');
  contraseñaLabelLogin.id = 'contraseña-LabelL';
  contraseñaLabelLogin.classList.add('contraseñaLabelL');
  contenedorGeneralLogin.appendChild(contraseñaLabelLogin);

  const contraseñaInputLogin = document.createElement('input');
  contraseñaInputLogin.setAttribute('type', 'password');
  contraseñaInputLogin.setAttribute('id', 'contraseña-InputL');
  contraseñaInputLogin.setAttribute('name', 'contraseña');
  contraseñaInputLogin.classList.add('contraseñaInputL');
  contenedorGeneralLogin.appendChild(contraseñaInputLogin);

  // Botón "Continuar"
  const continuarBtnLogin = document.createElement('button');
  continuarBtnLogin.classList.add('continuarBtnL');
  continuarBtnLogin.textContent = 'Continuar';
  continuarBtnLogin.id = 'continuar-BtnL';
  contenedorGeneralLogin.appendChild(continuarBtnLogin);

  // Botón "Continuar con Google"
  const googleBtnLogin = document.createElement('button');
  googleBtnLogin.classList.add('googleBtnL');
  googleBtnLogin.textContent = 'Continuar con Google';
  googleBtnLogin.id = 'continuar-GoogleBtnL';
  contenedorGeneralLogin.appendChild(googleBtnLogin);

/*
// Logo de Google
const logoGoogleLogin = document.createElement('img');
logoGoogleLogin.src = '../imagenes/logo-google.png';
logoGoogleLogin.alt = 'Iniciar sesión con Google';
googleBtnLogin.appendChild(logoGoogleLogin);
*/

// Iniciar sesión con Google
googleBtnLogin.addEventListener('click',() => {
  signInGoogle().then(()=>{
    onNavigate('/feed')
  })
  
});

contenedorGeneralLogin.appendChild(googleBtnLogin); 


  //Footer
  const footerLogin = document.createElement('footer');
  footerLogin.id = 'footer-Login';
  footerLogin.classList.add('footerL');
  footerLogin.textContent = 'Marchantes, 2023';
  contenedorGeneralLogin.appendChild(footerLogin);

  // Retorna el elemento div (con sus elementos hijos dentro)
  return containerLogin;
}
