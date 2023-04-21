import { onNavigate } from "../lib/router";
import {createUser } from '../lib/auth'



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

//input Repetir clave. Es mejor dejarlo en una clave y asi es menos complicado.
   // const claveRegistro2 = document.createElement("input");
    //claveRegistro2.classList = "claveInput2";
  //  contenedorMuro.appendChild(claveRegistro2);
   // claveRegistro2.placeholder = "Repetir contraseña";
 //   claveRegistro2.type = "password";
 //   claveRegistro2.id = "passwordUsuario2";


  // Creación de un elemento button y asignación a la variable button
  const registrarseAqui = document.createElement("button");
  //Le damos la clase para el css. quitandole el add, me funciono
  registrarseAqui.classList = "registrarseAqui";
  contenedorRegister.appendChild(registrarseAqui);
  // Asignación del texto "registrarse" al elemento button(que queremos que diga el boton en su interior)
  registrarseAqui.textContent = "Registrarse";
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
