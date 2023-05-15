import { getAuth, signOut } from 'firebase/auth';
import { onNavigate } from '../../lib/router/index';
import { createPost, verPosts, editPost } from '../../lib/firebase/autenticar';

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



  const postsContainer = document.createElement('div');
  postsContainer.id = 'posts-container';
  contenedorGeneralFeed.appendChild(postsContainer);

  verPosts(updatePosts);
  console.log(getAuth().currentUser)
  async function updatePosts(snapshot) {
    postsContainer.innerHTML = '';

    try {

      snapshot.forEach((doc, index) => {
        const post = doc.data();

        const listItem = document.createElement('div');

        const postContent = `${post.name == null ? post.email : post.name}: ${post.text}`;
        listItem.textContent = postContent;






      

        // Botón editar post

        const editButton = document.createElement('button');
        editButton.id = 'edit-button';
        editButton.classList.add('edit-button');
        editButton.textContent = 'Edit';
        editButton.dataset.id = doc.id; // almacenar el ID del post en el botón Eliminar

        editButton.addEventListener('click', async (event) => {
          const postId = event.target.dataset.id;
          try {
            await editPost(postId);
            console.log('Post editado exitosamente');
          } catch (error) {
            console.error('Error al editar el post:', error);
          }
        });

        async function updatePost(postId, newPostData) {
          const db = getFirestore();
          const postRef = doc(db, 'posts', postId);

          try {
            await updateDoc(postRef, newPostData);
            console.log('Post actualizado exitosamente');
          } catch (error) {
            console.error('Error al actualizar el post:', error);
          }
        }

        //CAMPO DE TEXTO OCULTO DENTRO DE POST PARA EDITARLO

        snapshot.forEach((doc, index) => {
          const post = doc.data();

          const listItem = document.createElement('div');

          // Mostrar el contenido original del post
          const postContent = `${post.name == null ? post.email : post.name}: ${post.text}`;
          listItem.textContent = postContent;

          // Agregar campo de texto para editar el post
          const editField = document.createElement('textarea');
          editField.classList.add('edit-field');
          editField.value = post.text; // Mostrar el contenido original del post
          editField.style.display = 'none'; // Ocultar el campo de texto
          listItem.appendChild(editField);

          // Botón editar post
          const editButton = document.createElement('button');
          editButton.id = 'edit-button';
          editButton.classList.add('edit-button');
          editButton.textContent = 'Editar';
          editButton.dataset.id = doc.id;

          editButton.addEventListener('click', () => {
            // Mostrar el campo de texto
            listItem.removeChild(listItem.firstChild);
            editField.style.display = 'block';
            listItem.insertBefore(editField, listItem.firstChild);
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













        postsContainer.appendChild(listItem);

        // Separador

        if (index !== snapshot.size - 1) {
          const separator = document.createElement('hr');
          separator.classList.add('post-separator');
          postsContainer.appendChild(separator);
        }
      });
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
    }
  }



  return containerFeed;
}
