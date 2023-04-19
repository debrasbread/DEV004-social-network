import { signInWithEmailAndPassword } from "firebase/auth";
import { onNavigate } from "../lib/router";
import { auth } from "/lib/firebase/firebase.js"
//como importar este archivo?
// import { firebaseConfig } from "/lib/firebase/firebase.js"

export function createHome() {
  // Creación de un elemento div y asignación a la variable container
  const contenedorGeneral = document.createElement("section");
  contenedorGeneral.classList.add("contenedorGeneral");


  //Logo
  const logo = document.createElement("img");
  logo.classList.add("logoMarchantes");
  logo.src = "../imagenes/logo-marchantes.png";

  contenedorGeneral.appendChild(logo);

  //formulario de login
  // const loginForm = document.createElement("form")
  // loginForm.classList = "loginForm"
  // container.appendChild(loginForm)


  //input del Email
  //como hacer un contenedor paara estos 2 input juntos?
  const mailInput = document.createElement("input")
  mailInput.classList = "mailInput"
  contenedorGeneral.appendChild(mailInput)
  mailInput.placeholder = "Email"
  mailInput.type = "email"
  mailInput.id = "emailUsuario"
  //input de la clave
  const claveInput = document.createElement("input")
  claveInput.classList = "claveInput"
  contenedorGeneral.appendChild(claveInput)
  claveInput.placeholder = "Contraseña"
  claveInput.type = "password"
  claveInput.id = "passwordUsuario"

  // Texto e hipervínculo "Regístrate"
  const botonRegistro = document.createElement("section");
  botonRegistro.classList.add("botonRegistro");
  botonRegistro.innerHTML = '¿No tienes una cuenta? <a href="#">Regístrate</a>.';
  contenedorGeneral.appendChild(botonRegistro);


  // Creación de un elemento button y asignación a la variable button
  const iniciarSesionBtn = document.createElement("button");
  //quitandole el add, me funciono
  iniciarSesionBtn.classList = "iniciarSesionBtn";
  contenedorGeneral.appendChild(iniciarSesionBtn);
  // Asignación del texto "Iniciar sesión" al elemento button
  iniciarSesionBtn.textContent = "Iniciar sesión";
  //obtener el valor mediante el event listener
  iniciarSesionBtn.addEventListener("click", () => {
    const email = document.getElementById("emailUsuario").value
    const password = document.getElementById("passwordUsuario").value

    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        onNavigate("/muro");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
      });
  })


  // Retorna el contenedor (con sus elementos hijos dentro)
  return contenedorGeneral;
}





