export function createHome() {
  // Creación de un elemento div y asignación a la variable container
  const container = document.createElement("div"); 
  // Creación de un elemento h1 y asignación a la variable title
  const title = document.createElement("h1");
  // Creación de un elemento p y asignación a la variable text
  const text = document.createElement("p");
  // Creación de un elemento button y asignación a la variable button
  const button = document.createElement("button");
  
  // Asignación del texto "Marchantes" al elemento h1
  title.textContent = "Marchantes";
  // Asignación de una cadena vacía al elemento p (no se establece ningún texto)
  text.textContent =
  // Asignación del texto "Iniciar sesión" al elemento button
  button.textContent = "Iniciar sesión"; //ANTES, QUIZÁ IRÍA "REGÍSTRATE", PERO NO ES UN BOTÓN SINO UN HIPERVÍNCULO EN TEXTO.
  
  // Agregado del elemento h1 al elemento div
  container.appendChild(title);
  // Agregado del elemento p al elemento div
  container.appendChild(text);
  // Agregado del elemento button al elemento div
  container.appendChild(button);
  
  // Establecimiento del color azul para el elemento h1
  title.style.color = "blue";
  // Establecimiento del color verde para el fondo del elemento button
  button.style.backgroundColor = "green";
  
  // Retorna el elemento div (con sus elementos hijos dentro)
  return container;
  }
 

