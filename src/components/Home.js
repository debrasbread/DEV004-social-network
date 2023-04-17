export function createHome() {
  // Creación de un elemento div y asignación a la variable container
  const container = document.createElement("section");

  // Background
  const backgroundImg = document.createElement("img");
  backgroundImg.classList.add("backgroundImg");
  backgroundImg.src = "../imagenes/background-mercado.jpg";
  container.appendChild(backgroundImg);

  // Contenedor principal
  const contenedorGeneral = document.createElement("section");
  contenedorGeneral.id = "contenedor-General";
  contenedorGeneral.classList.add("contenedorGeneral");
  container.appendChild(contenedorGeneral);

  // Logo
  const logo = document.createElement("img");
  logo.classList.add("logoMarchantes");
  logo.src = "../imagenes/logo-marchantes.png";
  contenedorGeneral.appendChild(logo);


  container.appendChild(logo);

  // Imagen de fondo
  /*
  const imgFondo = document.createElement("img");
  imgFondo.classList.add("imagenFondo");
  imgFondo.src = "../imagenes/marchantes-fondo-home.jpg";
  
  container.appendChild(imgFondo);
  */


  /*
    // Creación de un elemento h1 y asignación a la variable title
    const title = document.createElement("h1");
    // Creación de un elemento p y asignación a la variable text
    const text = document.createElement("p");
  
  */

  // Creación de un elemento button y asignación a la variable button
  const iniciarSesionBtn = document.createElement("button");
  //quitandole el add, me funciono
  iniciarSesionBtn.classList = "iniciarSesionBtn";

  container.appendChild(iniciarSesionBtn);


  // Asignación del texto "Marchantes" al elemento h1
  //title.textContent = "Marchantes";

  // Asignación de una cadena vacía al elemento p (no se establece ningún texto)
  //text.textContent =

  // Asignación del texto "Iniciar sesión" al elemento button
  iniciarSesionBtn.textContent = "Iniciar sesión";

  const loginForm = document.createElement("form")
  loginForm.classList = "loginForm"
  container.appendChild(loginForm)


  //input del Email
  const mailInput = document.createElement("input")
  mailInput.classList = "mailInput"
  container.appendChild(mailInput)
  mailInput.placeholder = "Email"

  //input de la clave
  const claveInput = document.createElement("input")
  claveInput.classList = "claveInput"
  container.appendChild(claveInput)
  claveInput.placeholder = "Clave"

  /*
  // Agregado del elemento h1 al elemento div
  container.appendChild(title);
  // Agregado del elemento p al elemento div
  container.appendChild(text);
  

  // Establecimiento del color azul para el elemento h1
  title.style.color = "blue";
  // Establecimiento del color verde para el fondo del elemento button
  button.style.backgroundColor = "green";
*/


  // Texto e hipervínculo "Regístrate"
  const registroLink = document.createElement("p");
  registroLink.classList.add("registroLink");
  registroLink.innerHTML = '¿No tienes una cuenta? <a href="#">Regístrate</a>.';
  contenedorGeneral.appendChild(registroLink);


  // Retorna el elemento div (con sus elementos hijos dentro)
  return container;
}
