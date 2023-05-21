import { createUser, signInGoogle } from '../../lib/firebase/autenticar';
import { onNavigate } from '../../lib/router/index';

export function register() {
  // Creación de div y asignación a variable container
  const containerRegister = document.createElement('main');

  // Imagen de fondo
  const backgroundImgRegister = document.createElement('img');
  backgroundImgRegister.classList.add('backgroundImgR');
  containerRegister.appendChild(backgroundImgRegister);

  // Contenedor de elementos
  const contenedorGeneralRegister = document.createElement('main');
  contenedorGeneralRegister.id = 'contenedor-GeneralR';
  contenedorGeneralRegister.classList.add('contenedorGeneralR');
  containerRegister.appendChild(contenedorGeneralRegister);

  // Logo
  const logoRegister = document.createElement('img');
  logoRegister.classList.add('logoR');
  logoRegister.src = '../imagenes/logo-marchantes.png';
  contenedorGeneralRegister.appendChild(logoRegister);

  /*
    // Texto 'Únete a Marchantes'
    const uneteRegister = document.createElement('h1');
    uneteRegister.id = 'iniciarSesionL';
    uneteRegister.classList.add('uneteR');
    uneteRegister.textContent = 'Únete a Marchantes';
    contenedorGeneralRegister.appendChild(uneteRegister);
  */

  // Formulario
  const formularioRegister = document.createElement('form');
  formularioRegister.id = 'formulario-Register';
  formularioRegister.classList.add('formularioR');
  contenedorGeneralRegister.appendChild(formularioRegister);

  // Nombre completo label + input
  const nombreLabelRegister = document.createElement('label');
  nombreLabelRegister.textContent = 'Nombre completo:';
  nombreLabelRegister.setAttribute('for', 'nombre-InputR');

  const nombreInputRegister = document.createElement('input');
  nombreInputRegister.type = 'text';
  nombreInputRegister.id = 'nombre-InputR';
  nombreInputRegister.required = true;
  nombreInputRegister.classList.add('nombreInputR');

  formularioRegister.append(nombreLabelRegister, nombreInputRegister);

  // Email label + input
  const emailLabelRegister = document.createElement('label');
  emailLabelRegister.textContent = 'Correo electrónico:';
  emailLabelRegister.setAttribute('for', 'email-InputR');

  const emailInputRegister = document.createElement('input');
  emailInputRegister.type = 'email';
  emailInputRegister.id = 'email-InputR';
  emailInputRegister.required = true;
  emailInputRegister.classList.add('emailInputR');

  formularioRegister.append(emailLabelRegister, emailInputRegister);

  // Contraseña
  const contrasenaLabelRegister = document.createElement('label');
  contrasenaLabelRegister.textContent = 'Contraseña:';
  contrasenaLabelRegister.setAttribute('for', 'contrasena');

  const contrasenaInputRegister = document.createElement('input');
  contrasenaInputRegister.type = 'password';
  contrasenaInputRegister.id = 'contrasena-InputR';
  contrasenaInputRegister.required = true;
  contrasenaInputRegister.classList.add('contrasenaInputR');

  formularioRegister.append(contrasenaLabelRegister, contrasenaInputRegister);

  // Agregar el formulario al body del documento
  contenedorGeneralRegister.append(formularioRegister);

  // Botón 'Continuar'

  const continuarBtnRegister = document.createElement('button');
  continuarBtnRegister.classList.add('continuarBtnR');
  continuarBtnRegister.textContent = 'Continuar';
  contenedorGeneralRegister.appendChild(continuarBtnRegister);

  // Click y mensaje de error
  // console.log('Se crea msj de error');
  const registroMensaje = document.createElement('p');
  registroMensaje.textContent = 'Debes registrarte para continuar';
  registroMensaje.classList.add('registro-mensaje');
  formularioRegister.appendChild(registroMensaje);

  registroMensaje.style.display = 'none';

  continuarBtnRegister.addEventListener('click', async (event) => {
    // console.log('Click en btn Continuar');
    event.preventDefault();
    const nombre = nombreInputRegister.value; // Obtener el valor del nombre
    const email = emailInputRegister.value;
    const contrasena = contrasenaInputRegister.value;
    if (!nombre || !email || !contrasena) {
      // console.log('Nombre, email o contraseña vacíos, se muestra msj de error');
      registroMensaje.style.display = 'block';
      return;
    }
    try {
      await createUser(nombre, email, contrasena);
      // console.log('Usuario creado satisfactoriamente');
      onNavigate('/feed');
    } catch (error) {
      // console.log('Error al crear usuario:', error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorDiv = document.getElementById('error-message');
      errorDiv.innerHTML = `Error ${errorCode}: ${errorMessage}`;
    }
  });

  // Botón 'Continuar con Google'
  const googleBtnRegister = document.createElement('button');
  googleBtnRegister.classList.add('googleBtnR');
  googleBtnRegister.textContent = 'Continuar con Google';

  // Logo de Google
  const logoGoogleRegister = document.createElement('img');
  logoGoogleRegister.src = '../imagenes/logo-google.png';
  logoGoogleRegister.alt = 'Iniciar sesión con Google';
  googleBtnRegister.appendChild(logoGoogleRegister);

  // Click y mensaje de error Google
  const registroMensajeGoogle = document.createElement('p');
  registroMensajeGoogle.textContent = 'Debes registrarte para continuar';
  registroMensajeGoogle.classList.add('registro-mensaje');
  formularioRegister.appendChild(registroMensajeGoogle);

  registroMensajeGoogle.style.display = 'none';

  googleBtnRegister.addEventListener('click', async (event) => {
    // console.log('Click en btn Continuar con Google');
    event.preventDefault();
    try {
      await signInGoogle();
      // console.log('Registro satisfactorio');
      onNavigate('/feed');
    } catch (error) {
      // console.log('Error al registrarse', error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorDiv = document.getElementById('error-message');
      errorDiv.innerHTML = `Error ${errorCode}: ${errorMessage}`;
    }
  });

  contenedorGeneralRegister.appendChild(googleBtnRegister);

  // Footer
  const footerRegister = document.createElement('footer');
  footerRegister.id = 'footer-Register';
  footerRegister.classList.add('footerR');
  footerRegister.textContent = 'Marchantes, 2023';
  contenedorGeneralRegister.appendChild(footerRegister);

  return containerRegister;
}
