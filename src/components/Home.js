export function createHome() {
  // Creación de un elemento div y asignación a la variable container
  const container = document.createElement("div");
  container.classList.add("contenedorGeneral");


  //Logo
  const logo = document.createElement("img");
  logo.classList.add("logoMarchantes");
  logo.src = "../imagenes/logo-marchantes.png";

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
  

  // Retorna el elemento div (con sus elementos hijos dentro)
  return container;
}





