export function createHome() {
  // Creación de un elemento div y asignación a la variable container
  const container = document.createElement("div");

  // Crear la imagen de fondo
  const backgroundImg = document.createElement("img");
  backgroundImg.style.position = "absolute";
  backgroundImg.style.top = "0";
  backgroundImg.style.left = "0";
  backgroundImg.style.zIndex = "-1";
  backgroundImg.style.width = "100%";
  backgroundImg.style.height = "100%";
  backgroundImg.style.objectFit = "cover";
  backgroundImg.src = "../imagenes/background-mercado.jpg";

  // Agregar la imagen de fondo al contenedor
  container.appendChild(backgroundImg);

  // Crear el contenedor principal
  const contenedorGeneral = document.createElement("div");
  contenedorGeneral.id = "contenedor-General";

  // Establecer el estilo del contenedor 
  contenedorGeneral.style.display = "grid";
  contenedorGeneral.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
  contenedorGeneral.style.gap = "20px";
  contenedorGeneral.style.margin = "0";
  contenedorGeneral.style.marginTop = "0";
  contenedorGeneral.style.paddingTop = "50px";
  contenedorGeneral.style.paddingBottom = "0";
  contenedorGeneral.style.maxWidth = "800px";
  contenedorGeneral.style.maxHeight = "1000px";
  contenedorGeneral.style.minWidth = "600px"; // Revisar para responsive!
  contenedorGeneral.style.minHeight = "900px"; // Revisar para responsive!
  contenedorGeneral.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  contenedorGeneral.style.textAlign = "center"; 
  contenedorGeneral.style.display = "flex"; 
  contenedorGeneral.style.flexDirection = "column";
  contenedorGeneral.style.justifyContent = "center"; 
  contenedorGeneral.style.alignItems = "center"; 
  //contenedorGeneral.style.borderRadius = "3%";
  

  // Agregar el contenedor al contenedor principal
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
registroLink.innerHTML = '¿No tienes una cuenta? <a href="#">Regístrate</a>.';
registroLink.style.margin = "0";
registroLink.style.paddingTop = "3px";
registroLink.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
registroLink.style.color = "white"; 
contenedorGeneral.appendChild(registroLink);


  // Retorna el elemento div (con sus elementos hijos dentro)
  return container;
}
