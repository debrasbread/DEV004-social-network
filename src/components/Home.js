export function createHome() {
  // Creación de un elemento div y asignación a la variable container
  const container = document.createElement("div");

  // Imagen de fondo
  const backgroundImg = document.createElement("img");
  backgroundImg.classList.add("backgroundImg");
  backgroundImg.src = "../imagenes/background-mercado.jpg";
  container.appendChild(backgroundImg);

  // Contenedor principal
  const contenedorGeneral = document.createElement("div");
  contenedorGeneral.id = "contenedor-General";
  contenedorGeneral.classList.add("contenedorGeneral");
  container.appendChild(contenedorGeneral);

  // Logo
  const logo = document.createElement("img");
  logo.classList.add("logoMarchantes");
  logo.src = "../imagenes/logo-marchantes.png";
  contenedorGeneral.appendChild(logo);

  // Botón "Iniciar sesión"
  const iniciarSesionBtn = document.createElement("button");
  iniciarSesionBtn.classList.add("iniciarSesionBtn");
  iniciarSesionBtn.textContent = "Iniciar sesión";
  contenedorGeneral.appendChild(iniciarSesionBtn);

  // Texto e hipervínculo "Regístrate"
  const registroLink = document.createElement("p");
  registroLink.classList.add("registroLink");
  registroLink.innerHTML = '¿No tienes una cuenta? <a href="#">Regístrate</a>.';
  contenedorGeneral.appendChild(registroLink);

  // Retorna el elemento div (con sus elementos hijos dentro)
  return container;
}
