import { getAuth, signOut } from 'firebase/auth'; // Importa las funciones getAuth y signOut del módulo 'firebase/auth'
import { onNavigate } from '../../lib/router/index'; // Importa la función onNavigate del archivo '../../lib/router/index'
import { createPost, verPosts, editPost } from '../../lib/firebase/autenticar'; // Importa las funciones createPost, verPosts y editPost del archivo '../../lib/firebase/autenticar'

export function feed() {
  const containerFeed = document.createElement('main'); // Crea un elemento <main> y lo asigna a la variable containerFeed

  const backgroundImgFeed = document.createElement('img'); // Crea un elemento <img> y lo asigna a la variable backgroundImgFeed
  backgroundImgFeed.classList.add('backgroundImgF'); // Agrega la clase 'backgroundImgF' al elemento
  containerFeed.appendChild(backgroundImgFeed); // Agrega el elemento como hijo de containerFeed

  const contenedorGeneralFeed = document.createElement('div'); // Crea un elemento <div> y lo asigna a la variable contenedorGeneralFeed
  contenedorGeneralFeed.id = 'contenedor-GeneralF'; // Asigna el id 'contenedor-GeneralF' al elemento
  contenedorGeneralFeed.classList.add('contenedorGeneralF'); // Agrega la clase 'contenedorGeneralF' al elemento
  containerFeed.appendChild(contenedorGeneralFeed); // Agrega el elemento como hijo de containerFeed

  const logoFeed = document.createElement('img'); // Crea un elemento <img> y lo asigna a la variable logoFeed
  logoFeed.classList.add('logoF'); // Agrega la clase 'logoF' al elemento
  logoFeed.src = '../imagenes/logo-marchantes.png'; // Asigna la ruta de la imagen al atributo src del elemento
  contenedorGeneralFeed.appendChild(logoFeed); // Agrega el elemento como hijo de contenedorGeneralFeed

  const container = document.createElement('div'); // Crea un elemento <div> y lo asigna a la variable container
  container.classList.add('compose-container'); // Agrega la clase 'compose-container' al elemento

  const textBox = document.createElement('textarea'); // Crea un elemento <textarea> y lo asigna a la variable textBox
  textBox.classList.add('compose-text'); // Agrega la clase 'compose-text' al elemento
  textBox.placeholder = '¿Qué hay de nuevo?'; // Asigna el texto del atributo placeholder del elemento
  container.appendChild(textBox); // Agrega el elemento como hijo de container

  const optionsBox = document.createElement('div'); // Crea un elemento <div> y lo asigna a la variable optionsBox
  optionsBox.classList.add('compose-options'); // Agrega la clase 'compose-options' al elemento
  container.appendChild(optionsBox); // Agrega el elemento como hijo de container

  const imageButton = document.createElement('label'); // Crea un elemento <label> y lo asigna a la variable imageButton
  imageButton.classList.add('compose-option'); // Agrega la clase 'compose-option' al elemento
  imageButton.htmlFor = 'compose-image-upload'; // Asigna el valor 'compose-image-upload' al atributo htmlFor del elemento

  const imageIcon = document.createElement('i'); // Crea un elemento <i> y lo asigna a la variable imageIcon
  imageIcon.classList.add('fas', 'fa-image'); // Agrega las clases 'fas' y 'fa-image' al elemento
  imageButton.appendChild(imageIcon); // Agrega el elemento imageIcon como hijo de imageButton
  optionsBox.appendChild(imageButton); // Agrega el elemento imageButton como hijo de optionsBox

  const imageUpload = document.createElement('input'); // Crea un elemento <input> y lo asigna a la variable imageUpload
  imageUpload.type = 'file'; // Asigna el tipo 'file' al elemento
  imageUpload.id = 'compose-image-upload'; // Asigna el valor 'compose-image-upload' al atributo id del elemento
  imageUpload.multiple = true; // Permite seleccionar múltiples archivos
  imageUpload.accept = 'image/*'; // Define que solo se aceptarán imágenes
  optionsBox.appendChild(imageUpload); // Agrega el elemento imageUpload como hijo de optionsBox

  const sendButton = document.createElement('button'); // Crea un elemento <button> y lo asigna a la variable sendButton
  sendButton.classList.add('compose-option', 'compose-send'); // Agrega las clases 'compose-option' y 'compose-send' al elemento
  sendButton.textContent = 'Publicar'; // Asigna el texto 'Publicar' al contenido del elemento
  optionsBox.appendChild(sendButton); // Agrega el elemento sendButton como hijo de optionsBox

  sendButton.addEventListener('click', async () => { // Agrega un event listener para detectar el clic en sendButton
    const postData = textBox.value; // Obtiene el valor del campo de texto textBox

    try {
      await createPost(postData); // Llama a la función createPost con el contenido del campo de texto
      console.log('Post creado exitosamente');
      textBox.value = ''; // Borra el contenido del campo de texto

    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  });

  contenedorGeneralFeed.appendChild(container); // Agrega el elemento container como hijo de contenedorGeneralFeed

  const logoutButton = document.createElement('button'); // Crea un elemento <button> y lo asigna a la variable logoutButton
  logoutButton.id = 'logout-button'; // Asigna el valor 'logout-button' al atributo id del elemento
  logoutButton.classList.add('logout-button'); // Agrega la clase 'logout-button' al elemento
  logoutButton.textContent = 'Salir'; // Asigna el texto 'Salir' al contenido del elemento

  logoutButton.addEventListener('click', async () => { // Agrega un event listener para detectar el clic en logoutButton
    try {
      const auth = getAuth(); // Obtiene la autenticación actual
      await signOut(auth); // Cierra la sesión con la autenticación
      console.log('Cierre de sesión exitoso');
      onNavigate('/'); // Navega a la página de inicio

    } catch (error) {
      console.error('Error durante el cierre de sesión:', error);
    }
  });

  contenedorGeneralFeed.appendChild(logoutButton); // Agrega el elemento logoutButton como hijo



  const postsContainer = document.createElement('div'); // Crea un elemento <div> y lo asigna a la variable postsContainer
  postsContainer.id = 'posts-container'; // Asigna el valor 'posts-container' al atributo id del elemento
  contenedorGeneralFeed.appendChild(postsContainer); // Agrega el elemento postsContainer como hijo de contenedorGeneralFeed

  verPosts(updatePost); // Llama a la función verPosts y pasa la función updatePosts como argumento
  console.log(getAuth().currentUser); // Imprime en la consola el usuario actual obtenido de la autenticación


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

        editButton.addEventListener('click', () => {
          listItem.removeChild(listItem.firstChild);
          editField.style.display = 'block';
          listItem.insertBefore(editField, listItem.firstChild);
        });

        const saveButton = document.createElement('button');
        saveButton.id = 'save-button';
        saveButton.classList.add('save-button');
        saveButton.textContent = 'Guardar';
        listItem.appendChild(saveButton);

        saveButton.addEventListener('click', async () => {
          const newPostData = editField.value;
          try {
            await editPost(doc.id, { text: newPostData });
            console.log('Post editado exitosamente');
            listItem.removeChild(listItem.firstChild);
            listItem.textContent = `${post.name == null ? post.email : post.name}: ${newPostData}`;
          } catch (error) {
            console.error('Error al editar el post:', error);
          }
        });

        listItem.appendChild(editButton);
        postsContainer.appendChild(listItem);

        // Separador
        if (index !== snapshot.size - 1) {
          const separator = document.createElement('hr');
          separator.classList.add('post-separator');
          postsContainer.appendChild(separator);
        }
      });
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  }

  /*
                  //Botón eliminar post
          
                  const deleteButton = document.createElement('button');
                  deleteButton.id = 'delete-button';
                  deleteButton.classList.add('delete-button');
                  deleteButton.textContent = 'Delete';
                  deleteButton.dataset.id = doc.id; // almacenar el ID del post en el botón Eliminar
          
          
          
                  deleteButton.addEventListener('click', async (event) => {
                    const postId = event.target.dataset.id;
                    try {
                      await eliminarPost(postId);
                      console.log('Post eliminado exitosamente');
                    } catch (error) {
                      console.error('Error al eliminar el post:', error);
                    }
                  });
                  
                  async function eliminarPost(postId) {
                    const db = firestore;
                    const postRef = doc(db, 'posts', postId);
                    await deleteDoc(postRef);
                  }
          */

  return containerFeed;
}
