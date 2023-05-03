import { signInGoogle, loginUser } from '../../lib/firebase/autenticar';
import { onNavigate } from '../../lib/router/index';


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







const parrafoError = document.createElement('p');
contenedorGeneralLogin.appendChild(parrafoError);





  // Botón "Continuar"
  const continuarBtnLogin = document.createElement('button');
  continuarBtnLogin.classList.add('continuarBtnL');
  continuarBtnLogin.textContent = 'Continuar';
  continuarBtnLogin.id = 'continuar-BtnL';
  contenedorGeneralLogin.appendChild(continuarBtnLogin);


// Click y mensaje de error
console.log('Se crea msj de error');
const loginMensaje = document.createElement('p');
loginMensaje.textContent = 'Debes iniciar sesión para continuar';
loginMensaje.classList.add('login-mensaje');
contenedorGeneralLogin.appendChild(loginMensaje);

loginMensaje.style.display = 'none';

continuarBtnLogin.addEventListener('click', async (event) => {
  console.log('Click en btn Continuar');
  event.preventDefault();
  const email = emailInputLogin.value;
  const contrasena = contraseñaInputLogin.value;
  if (!email || !contrasena) {
    console.log('Email o contraseña vacíos, se muestra msj de error');
    loginMensaje.style.display = 'block';
    return;
  }
  try {
    await loginUser(email, contrasena); // AQUÍ PODRÍA ESTAR EL PROBLEMA - IMPORTAR CORRECTAMENTE
    console.log('Usuario creado satisfactoriamente');
    onNavigate('/feed');
  } catch (error) {
    console.log('Error al crear usuario:', error);
    const errorCode = error.code;
    const errorMessage = error.message;
   // const errorDiv = document.getElementById('error-message');
   
   parrafoError.innerHTML = `Error ${errorCode}: ${errorMessage}`;
  }
});
 
  contenedorGeneralLogin.appendChild(continuarBtnLogin); 

 

  // Botón "Continuar con Google"
  const googleBtnLogin = document.createElement('button');
  googleBtnLogin.classList.add('googleBtnL');
  googleBtnLogin.textContent = 'Continuar con Google';
  googleBtnLogin.id = 'continuar-GoogleBtnL';
  contenedorGeneralLogin.appendChild(googleBtnLogin);


// Logo de Google
const logoGoogleLogin = document.createElement('img');
logoGoogleLogin.src = '../imagenes/logo-google.png';
logoGoogleLogin.alt = 'Iniciar sesión con Google';
googleBtnLogin.appendChild(logoGoogleLogin);


  // Click y mensaje de error Google
  const loginMensajeGoogle = document.createElement('p');
  loginMensajeGoogle.textContent = 'Debes iniciar sesión para continuar';
  loginMensajeGoogle.classList.add('login-mensaje');
  contenedorGeneralLogin.appendChild(loginMensajeGoogle);
  
  loginMensajeGoogle.style.display = 'none';
  
  googleBtnLogin.addEventListener('click', async (event) => {
    console.log('Click en btn Continuar con Google');
    event.preventDefault();
    try {
      await signInGoogle();
      console.log('Inicio de sesión satisfactorio');
      onNavigate('/feed');
    } catch (error) {
      console.log('Error al iniciar sesión', error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorDiv = document.getElementById('error-message');
      errorDiv.innerHTML = `Error ${errorCode}: ${errorMessage}`;
    }
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
