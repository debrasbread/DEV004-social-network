export function feed() {

 // Creación de main y asignación a variable home
 const containerFeed = document.createElement("main");

 // Contenedor de elementos
 const contenedorGeneralFeed = document.createElement("main");
 contenedorGeneralFeed.id = "contenedor-GeneralF";
 contenedorGeneralFeed.classList.add("contenedorGeneralF");
 containerFeed.appendChild(contenedorGeneralFeed);

 // Logo
 const logoFeed = document.createElement("img");
 logoFeed.classList.add("logoF");
 logoFeed.src = "../imagenes/logo-marchantes.png";
 contenedorGeneralFeed.appendChild(logoFeed);

 // Post

 // Footer
 const footerFeed = document.createElement("footer");
 footerFeed.id = "footer-Feed";
 footerFeed.classList.add("footerF");
 footerFeed.textContent = "Marchantes, 2023";
 contenedorGeneralFeed.appendChild(footerFeed);

 // Retorna el contenedor principal
 return containerFeed;







}
