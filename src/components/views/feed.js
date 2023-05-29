import { getAuth, signOut } from 'firebase/auth';
import { onNavigate } from '../../lib/router/index';
import {
  createPost, verPosts, editPost, deletePost, isAuthor,
}
  from '../../lib/firebase/autenticar';

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
  logoFeed.src = '../imagenes/logo-marchantes-feed.png';
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
      // console.log('Post creado exitosamente');
      textBox.value = '';
    } catch (error) {
      // console.error('Error al crear el post:', error);
    }
  });

  contenedorGeneralFeed.appendChild(container);

  // Botón cerrar sesión
  const logoutButton = document.createElement('button');
  logoutButton.id = 'logout-button';
  logoutButton.classList.add('logout-button');
  logoutButton.textContent = 'Salir';

  logoutButton.addEventListener('click', async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      // console.log('Cierre de sesión exitoso');
      onNavigate('/');
    } catch (error) {
      // console.error('Error durante el cierre de sesión:', error);
    }
  });

  contenedorGeneralFeed.appendChild(logoutButton);

  const postsContainer = document.createElement('div');
  postsContainer.id = 'posts-container';
  contenedorGeneralFeed.appendChild(postsContainer);
  // console.log(getAuth().currentUser);

  async function updatePost(snapshot) {
    postsContainer.innerHTML = '';

    try {
      snapshot.forEach((doc, index) => {
        const post = doc.data();

        const listItem = document.createElement('div');
        const postContent = `${post.name == null ? post.email : post.name}: ${post.text}`;
        listItem.textContent = postContent;

        const editField = document.createElement('textarea');
        editField.classList.add('edit-field');
        editField.value = post.text;
        editField.style.display = 'none';
        listItem.appendChild(editField);

        const editButton = document.createElement('button');
        editButton.id = 'edit-button';
        editButton.classList.add('edit-button');
        editButton.textContent = 'Editar';
        editButton.dataset.id = doc.id;

        const editButtonContainer = document.createElement('div');
        editButtonContainer.appendChild(editButton);

        if (isAuthor(post)) {
          editButtonContainer.style.display = 'block';
        } else {
          editButtonContainer.style.display = 'none';
        }

        editButton.addEventListener('click', () => {
          listItem.removeChild(listItem.firstChild);
          editField.style.display = 'block';
          listItem.insertBefore(editField, listItem.firstChild);
        });

        listItem.appendChild(editButtonContainer);

        editButton.addEventListener('click', () => {
          listItem.removeChild(listItem.firstChild);
          editField.style.display = 'block';
          listItem.insertBefore(editField, listItem.firstChild);
        });

        const saveButton = document.createElement('button');
        saveButton.id = 'save-button';
        saveButton.classList.add('save-button');
        saveButton.textContent = 'Guardar';

        const saveButtonContainer = document.createElement('div');
        saveButtonContainer.appendChild(saveButton);

        if (isAuthor(post)) {
          saveButton.style.display = 'block';
        } else {
          saveButton.style.display = 'none';
        }

        saveButton.addEventListener('click', async () => {
          const newPostData = editField.value;
          try {
            await editPost(doc.id, { text: newPostData });
            // console.log('Post editado exitosamente');
            listItem.removeChild(listItem.firstChild);
            listItem.textContent = `${post.name == null ? post.email : post.name}: ${newPostData}`;
          } catch (error) {
            // console.error('Error al editar el post:', error);
          }
        });

        listItem.appendChild(saveButton);

        listItem.appendChild(saveButtonContainer);

        // Botón eliminar post

        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete-button';
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.dataset.id = doc.id;

        const deleteButtonContainer = document.createElement('div');
        deleteButtonContainer.appendChild(deleteButton);

        if (isAuthor(post)) {
          deleteButton.style.display = 'block';
        } else {
          deleteButton.style.display = 'none';
        }

        deleteButton.addEventListener('click', async (event) => {
          const postId = event.target.dataset.id;
          try {
            await deletePost(postId);
            // console.log('Post eliminado exitosamente');
          } catch (error) {
            // console.error('Error al eliminar el post:', error);
          }
        });

        listItem.appendChild(deleteButton);

        postsContainer.appendChild(listItem);

        listItem.appendChild(deleteButtonContainer);

        // Separador
        if (index !== snapshot.size - 1) {
          const separator = document.createElement('hr');
          separator.classList.add('post-separator');
          postsContainer.appendChild(separator);
        }
      });
    } catch (error) {
      // console.error('Error al obtener los posts:', error);
    }
  }
  verPosts(updatePost);
  return containerFeed;
}
