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

  verPosts(updatePosts); // Llama a la función verPosts y pasa la función updatePosts como argumento
  console.log(getAuth().currentUser); // Imprime en la consola el usuario actual obtenido de la autenticación

  async function updatePosts(snapshot) { // Declara una función asíncrona llamada updatePosts y recibe un parámetro llamado snapshot
    postsContainer.innerHTML = ''; // Borra el contenido actual del elemento postsContainer

    try {
      snapshot.forEach((doc, index) => { // Itera sobre cada documento en el snapshot
        const post = doc.data(); // Obtiene los datos del documento

        const listItem = document.createElement('div'); // Crea un elemento <div> y lo asigna a la variable listItem

        const postContent = `${post.name == null ? post.email : post.name}: ${post.text}`; // Construye el contenido del post
        listItem.textContent = postContent; // Asigna el contenido del post al contenido de listItem



        // EDITAR POST

          async function editPost(postId, newPostData) { // Declara una función asíncrona llamada updatePost y recibe dos parámetros: postId y newPostData
          const db = getFirestore(); // Obtiene la instancia de Firestore
          const postRef = doc(db, 'posts', postId); // Obtiene la referencia del documento del post utilizando el ID y la colección 'posts'

          try {
            await updateDoc(postRef, newPostData); // Actualiza el documento del post con los nuevos datos
            console.log('Post actualizado exitosamente');
          } catch (error) {
            console.error('Error al actualizar el post:', error);
          }
        }


        //CAMPO DE TEXTO OCULTO DENTRO DE POST PARA EDITARLO

        snapshot.forEach((doc, index) => { // Itera sobre cada documento en el snapshot
          const post = doc.data(); // Obtiene los datos del documento

          const listItem = document.createElement('div'); // Crea un elemento <div> y lo asigna a la variable listItem

          const postContent = `${post.name == null ? post.email : post.name}: ${post.text}`; // Construye el contenido original del post
          listItem.textContent = postContent; // Asigna el contenido original del post al contenido de listItem

          const editField = document.createElement('textarea'); // Crea un elemento <textarea> y lo asigna a la variable editField
          editField.classList.add('edit-field'); // Agrega la clase 'edit-field' al elemento
          editField.value = post.text; // Asigna el contenido original del post al valor del campo de texto
          editField.style.display = 'none'; // Oculta el campo de texto estableciendo su estilo a 'none'
          listItem.appendChild(editField); // Agrega el elemento editField como hijo de listItem

          const editButton = document.createElement('button'); // Crea un elemento <button> y lo asigna a la variable editButton
          editButton.id = 'edit-button'; // Asigna el valor 'edit-button' al atributo id del elemento
          editButton.classList.add('edit-button'); // Agrega la clase 'edit-button' al elemento
          editButton.textContent = 'Editar'; // Asigna el texto 'Editar' al contenido del elemento
          editButton.dataset.id = doc.id; // Almacena el ID del post en el atributo dataset del botón editar

          editButton.addEventListener('click', () => {
            listItem.removeChild(listItem.firstChild); // Elimina el primer hijo de listItem (contenido original del post)
            editField.style.display = 'block'; // Muestra el campo de texto estableciendo su estilo a 'block'
            listItem.insertBefore(editField, listItem.firstChild); // Inserta el campo de texto como el primer hijo de listItem
          });


          // Botón guardar cambios
          const saveButton = document.createElement('button');
          saveButton.id = 'save-button';
          saveButton.classList.add('save-button');
          saveButton.textContent = 'Guardar';
          //saveButton.style.display = 'none'; // Ocultar el botón "Save"
          listItem.appendChild(saveButton);

          saveButton.addEventListener('click', async () => {
            const newPostData = editField.value;
            try {
              await updatePost(doc.id, { text: newPostData });
              console.log('Post editado exitosamente');
              // Mostrar el contenido editado del post
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

        //ACTUALIZAR CONTENIDO DEL POST EN LA BASE DE DATOS

        async function updatePost(postId, newPostData) {
          try {
            const db = getFirestore();
            const postRef = doc(db, 'posts', postId);

            await updateDoc(postRef, newPostData);

            console.log('Post actualizado exitosamente');
          } catch (error) {
            console.error('Error al actualizar el post:', error);
          }
        }

        contenedorGeneralFeed.appendChild(editButton);

        postsContainer.appendChild(listItem);


      });
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
    }
  }

  return containerFeed;
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
                  const db = getFirestore();
                  const postRef = doc(db, 'posts', postId);
                  await deleteDoc(postRef);
                }
        */