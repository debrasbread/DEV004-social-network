// signOut Firebase

import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });

// Feed

export function feed() {
  // Creación de main y asignación a variable containerFeed
  const containerFeed = document.createElement('main');

  // Imagen de fondo
  const backgroundImgFeed = document.createElement('img');
  backgroundImgFeed.classList.add('backgroundImgF');
  containerFeed.appendChild(backgroundImgFeed);

  // Contenedor de elementos
  const contenedorGeneralFeed = document.createElement('div');
  contenedorGeneralFeed.id = 'contenedor-GeneralF';
  contenedorGeneralFeed.classList.add('contenedorGeneralF');
  containerFeed.appendChild(contenedorGeneralFeed);

  // Logo
  const logoFeed = document.createElement('img');
  logoFeed.classList.add('logoF');
  logoFeed.src = '../imagenes/logo-marchantes.png';
  contenedorGeneralFeed.appendChild(logoFeed);
  
  // Línea separadora 1
  /*
  const hrDespuesForm = document.createElement('hr');
  hrDespuesForm.classList.add('lineaSeparadora1');
  contenedorGeneralFeed.appendChild(hrDespuesForm);
  */

  /* Formulario */

  // Contenedor principal
  const container = document.createElement('div');
  container.classList.add('compose-container');

  // Cuadro de texto
  const textBox = document.createElement('textarea');
  textBox.classList.add('compose-text');
  textBox.placeholder = '¿Qué hay de nuevo?';
  container.appendChild(textBox);

  // Contenedor de opciones
  const optionsBox = document.createElement('div');
  optionsBox.classList.add('compose-options');
  container.appendChild(optionsBox);

  // Botón de carga de imagen
  const imageButton = document.createElement('label');
  imageButton.classList.add('compose-option');
  imageButton.htmlFor = 'compose-image-upload';
  const imageIcon = document.createElement('i');
  imageIcon.classList.add('fas', 'fa-image');
  imageButton.appendChild(imageIcon);
  optionsBox.appendChild(imageButton);

  // Campo de carga de imagen
  const imageUpload = document.createElement('input');
  imageUpload.type = 'file';
  imageUpload.id = 'compose-image-upload';
  imageUpload.multiple = true;
  imageUpload.accept = 'image/*';
  optionsBox.appendChild(imageUpload);

  // Botón de enviar
  const sendButton = document.createElement('button');
  sendButton.classList.add('compose-option', 'compose-send');
  sendButton.textContent = 'Publicar';
  optionsBox.appendChild(sendButton);

  // Agregar el formulario al contenedor general
  contenedorGeneralFeed.appendChild(container);

  /*
  // Línea separadora 2
  const hrDespuesPost = document.createElement('hr');
  hrDespuesPost.classList.add('lineaSeparadora2');
  contenedorGeneralFeed.appendChild(hrDespuesPost);
  */

  // Footer
  const footerFeed = document.createElement('footer');
  footerFeed.id = 'footer-Feed';
  footerFeed.classList.add('footerF');
  footerFeed.textContent = 'Marchantes, 2023';
  contenedorGeneralFeed.appendChild(footerFeed);

  // Retorna el contenedor principal
  return containerFeed;
}