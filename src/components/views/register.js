// Importar
import { createUserWithEmailAndPassword } from '../lib/firebase/autenticar.js';

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
  // Texto "Únete a Marchantes"
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
  nombreInputRegister.name = 'nombreCompleto';
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

  // Repetir contraseña
  const labelRepetirContrasena = document.createElement('label');
  labelRepetirContrasena.textContent = 'Repetir contraseña:';
  labelRepetirContrasena.setAttribute('for', 'repetirContrasena');

  const inputRepetirContrasena = document.createElement('input');
  inputRepetirContrasena.type = 'password';
  inputRepetirContrasena.id = 'repetirContrasena';
  inputRepetirContrasena.required = true;
  inputRepetirContrasena.classList.add('repetirContrasenaR');

  formularioRegister.append(labelRepetirContrasena, inputRepetirContrasena);

  // Agregar el formulario al body del documento
  document.body.append(formularioRegister);

  // Botón 'Continuar'

  /* const continuarBtnRegister = document.createElement('button');
  continuarBtnRegister.classList.add('continuarBtnR');
  continuarBtnRegister.textContent = 'Continuar';
  contenedorGeneralRegister.appendChild(continuarBtnRegister);*/

  const continuarBtnRegister = document.createElement('button');
  continuarBtnRegister.classList.add('continuarBtnR');
  continuarBtnRegister.textContent = 'Continuar';
  contenedorGeneralRegister.appendChild(continuarBtnRegister);

  continuarBtnRegister.addEventListener('click', async (event) => {
    event.preventDefault();
    const nombre = nombreInputRegister.value;
    const email = emailInputRegister.value;
    const contrasena = contrasenaInputRegister.value;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        email,
        contrasena
      );
      // Si el registro fue exitoso, podríamos redirigir al usuario a otra página o mostrar un mensaje de confirmación.
      console.log('Registro exitoso:', userCredential);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Podríamos mostrar un mensaje de error al usuario aquí
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

  contenedorGeneralRegister.appendChild(googleBtnRegister);

  // Footer
  const footerRegister = document.createElement('footer');
  footerRegister.id = 'footer-Register';
  footerRegister.classList.add('footerR');
  footerRegister.textContent = 'Marchantes, 2023';
  contenedorGeneralRegister.appendChild(footerRegister);

  return containerRegister;
}
