import { getAuth, signOut } from 'firebase/auth';
import { onNavigate } from '../../lib/router/index';
import { createPost, listarPosts } from '../../lib/firebase/autenticar';

export function feed() {
  const containerFeed = document.createElement('main');

  const backgroundImgFeed = document.createElement('img');
  backgroundImgFeed.classList.add('backgroundImgF');
  containerFeed.appendChild(backgroundImgFeed);

  const contenedorGeneralFeed = document.createElement('div');
  contenedorGeneralFeed.id = 'contenedor-GeneralF';
  contenedorGeneralFeed.classList.add('contenedorGeneralF');
  containerFeed.appendChild(contenedorGeneralFeed);

  const logoFeed = document.createElement('img');
  logoFeed.classList.add('logoF');
  logoFeed.src = '../imagenes/logo-marchantes.png';
  contenedorGeneralFeed.appendChild(logoFeed);

  const container = document.createElement('div');
  container.classList.add('compose-container');

  const textBox = document.createElement('textarea');
  textBox.classList.add('compose-text');
  textBox.placeholder = '¿Qué hay de nuevo?';
  container.appendChild(textBox);

  const optionsBox = document.createElement('div');
  optionsBox.classList.add('compose-options');
  container.appendChild(optionsBox);

  const imageButton = document.createElement('label');
  imageButton.classList.add('compose-option');
  imageButton.htmlFor = 'compose-image-upload';
  const imageIcon = document.createElement('i');
  imageIcon.classList.add('fas', 'fa-image');
  imageButton.appendChild(imageIcon);
  optionsBox.appendChild(imageButton);

  const imageUpload = document.createElement('input');
  imageUpload.type = 'file';
  imageUpload.id = 'compose-image-upload';
  imageUpload.multiple = true;
  imageUpload.accept = 'image/*';
  optionsBox.appendChild(imageUpload);

  const sendButton = document.createElement('button');
  sendButton.classList.add('compose-option', 'compose-send');
  sendButton.textContent = 'Publicar';
  optionsBox.appendChild(sendButton);

  sendButton.addEventListener('click', async () => {
    const postData = textBox.value;

    try {
      await createPost(postData);
      console.log('Post creado exitosamente');
      textBox.value = '';
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  });

  contenedorGeneralFeed.appendChild(container);

  const logoutButton = document.createElement('button');
  logoutButton.id = 'logout-button';
  logoutButton.classList.add('logout-button');
  logoutButton.textContent = 'Salir';

  logoutButton.addEventListener('click', async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log('Cierre de sesión exitoso');
      onNavigate('/');
    } catch (error) {
      console.error('Error durante el cierre de sesión:', error);
    }
  });

  contenedorGeneralFeed.appendChild(logoutButton);

  const footerFeed = document.createElement('footer');
  footerFeed.id = 'footer-Feed';
  footerFeed.classList.add('footerF');
  footerFeed.textContent = 'Marchantes, 2023';
  contenedorGeneralFeed.appendChild(footerFeed);

  const postsContainer = document.createElement('div');
  postsContainer.id = 'posts-container';
  contenedorGeneralFeed.appendChild(postsContainer);

  listarPosts(updatePosts);

  function updatePosts(snapshot) {
    postsContainer.innerHTML = '';

    snapshot.forEach((doc) => {
      const post = doc.data();

      const listItem = document.createElement('div');
      listItem.textContent = post.text;

      postsContainer.appendChild(listItem);
    });
  }

  return containerFeed;
}
