import { onNavigate } from "../lib/router";
import {createUser } from '../lib/auth';
// import { back } from '../lib/auth';



export function createRegister() {
  const contenedorRegister = document.createElement("section")
  contenedorRegister.classList.add("contenedorRegister")

    //como hacer un contenedor paara estos 2 input juntos?
    const mailRegistro = document.createElement("input");
    mailRegistro.classList = "mailInput";
    contenedorRegister.appendChild(mailRegistro);
    mailRegistro.placeholder = "Email";
    mailRegistro.type = "email";
    mailRegistro.id = "emailUsuarioRegistro";

    //input de la clave
    const claveRegistro = document.createElement("input");
    claveRegistro.classList = "claveInput";
    contenedorRegister.appendChild(claveRegistro);
    claveRegistro.placeholder = "Contraseña";
    claveRegistro.type = "password";
    claveRegistro.id = "passwordUsuarioRegistro";

     // Logo
  const logoRegistro = document.createElement("img");
  logoRegistro.classList.add("logoMarchantes");
  logoRegistro.src = "../imagenes/logo-marchantes.png";
  contenedorRegister.appendChild(logoRegistro);

  // Creación de un elemento button y asignación a la variable button
  const registrarseAqui = document.createElement("button");
  //Le damos la clase para el css. quitandole el add, me funciono
  registrarseAqui.classList = "registrarseAqui";
  contenedorRegister.appendChild(registrarseAqui);
  // Asignación del texto "registrarse" al elemento button(que queremos que diga el boton en su interior)
  registrarseAqui.textContent = "Registrarse";


 
//INTENTO DE CREAR UN BOTON "volver"
//   const btnVolver = document.createElement('button');
// btnVolver.textContent = "Volver";
// btnVolver.classList = "VolverInicio";
//   btnVolver.addEventListener('click', ()=>{
//     back().then((resp)=>{
//     onNavigate('/')
//     })
// })
// // Agregamos el botón al DOM
// contenedorRegister.appendChild(btnVolver);

  

// const botonAtras = document.createElement("div")
// botonAtras.classList.add("botonAtras")
// botonAtras.appendChild = "javascript:history.go(-1) <a href="#">Regístrate</a>."
  
  
  //obtener el valor mediante el event listener
  registrarseAqui.addEventListener("click", () => {
    const emailR = document.getElementById("emailUsuarioRegistro").value;
    const passwordR = document.getElementById("passwordUsuarioRegistro").value;
console.log("click")
createUser(emailR, passwordR).then((rep)=>{
  onNavigate('/muro')
}).catch((err)=>{
  alert('Verifica los datos, fue imposible registrarte')
})
  })
    // const auth = getAuth();
    
    return contenedorRegister
 }
