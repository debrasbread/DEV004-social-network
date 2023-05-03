import { getAuth, signOut } from 'firebase/auth';
import { onNavigate } from '../../lib/router/index';




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







  
   // Botón de cierre de sesión
const logoutButton = document.createElement('button');
logoutButton.id = 'logout-button';
logoutButton.classList.add('logout-button');
logoutButton.textContent = 'Salir';

// Evento de click en el botón de cierre de sesión
logoutButton.addEventListener('click', async () => {
  try {
    // Objeto de autenticación de Firebase
    const auth = getAuth();

    // Llama a la función de signOut para cerrar sesión
    await signOut(auth);

    // Cierre de sesión exitoso
    console.log('Cierre de sesión exitoso');

    // Redireccionar al usuario a la página principal
    onNavigate('/');
  } catch (error) {
    // Ocurrió un error durante el cierre de sesión
    console.error('Error durante el cierre de sesión:', error);
  }
});

contenedorGeneralFeed.appendChild(logoutButton);

  











  // Footer
  const footerFeed = document.createElement('footer');
  footerFeed.id = 'footer-Feed';
  footerFeed.classList.add('footerF');
  footerFeed.textContent = 'Marchantes, 2023';
  contenedorGeneralFeed.appendChild(footerFeed);

  // Retorna el contenedor principal
  return containerFeed;


}

/*****CREAR POST*****/

/*

// Evento de envío del formulario para publicar un post
const form = document.getElementById("post-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Obtener los datos del formulario
  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;
  
  // Crear un nuevo documento en Firestore
  db.collection("posts").add({
    title: title,
    content: content,
    likes: 0
  })
  .then(() => {
    console.log("Post creado con éxito");
    form.reset(); // Limpiar el formulario después de enviarlo
  })
  .catch((error) => {
    console.error("Error al crear el post: ", error);
  });
});


*/