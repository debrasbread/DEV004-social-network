import { signInWithEmailAndPassword } from "firebase/auth";
import { onNavigate } from "../lib/router";
import { auth } from "/lib/firebase/firebase.js"
import {signInWithEmail, provider, loginGoogle } from '../lib/auth'
import { getRedirectResult } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


//como importar este archivo?
// import { firebaseConfig } from "/lib/firebase/firebase.js"

export function createHome() {
  

  // Contenedor principal
  const contenedorGeneral = document.createElement("section");
  contenedorGeneral.id = "contenedor-General";
  contenedorGeneral.classList.add("contenedorGeneral");
  // contenedorGeneral.appendChild(contenedorGeneral);

  // Logo
  const logo = document.createElement("img");
  logo.classList.add("logoMarchantes");
  logo.src = "../imagenes/logo-marchantes.png";
  contenedorGeneral.appendChild(logo);



  //input del Email
  //como hacer un contenedor paara estos 2 input juntos?
  const mailInput = document.createElement("input");
  mailInput.classList = "mailInput";
  contenedorGeneral.appendChild(mailInput);
  mailInput.placeholder = "Email";
  mailInput.type = "email";
  mailInput.id = "emailUsuario";

  //label para nombrar el input en el home 
  // const mailLabel = document.createElement("span");
  // mailLabel.textContent = "Ingresa tu email";
  // mailLabel.classList =  "mailLabel";
  // contenedorGeneral.appendChild(mailLabel);

  //input de la clave
  const claveInput = document.createElement("input");
  claveInput.classList = "claveInput";
  contenedorGeneral.appendChild(claveInput);
  claveInput.placeholder = "Contraseña";
  claveInput.type = "password";
  claveInput.id = "passwordUsuario";

  //label para nombrar el input en el home 
  // const claveLabel = document.createElement("label");
  // claveLabel.textContent = "Ingresa tu clave";
  // claveLabel.classList =  "claveLabel";
  // contenedorGeneral.appendChild(claveLabel);


  const botonGoogle = document.createElement("button");
  botonGoogle.classList = "botonGoogle";
  contenedorGeneral.appendChild(botonGoogle);
  botonGoogle.textContent = "Inicia sesion con Google"
  botonGoogle.id = "botonDeGoogle"
  botonGoogle.addEventListener("click", () => {
  loginGoogle()
  
  });  



  // Texto e hipervínculo "Regístrate"
  const botonRegistro = document.createElement("section");
  botonRegistro.classList.add("botonRegistro");
  botonRegistro.innerHTML = '¿No tienes una cuenta? <a href="#">Regístrate</a>.';
  contenedorGeneral.appendChild(botonRegistro);
  botonRegistro.id = "registrateAqui";
  botonRegistro.style.textAlign = "center";
  botonRegistro.addEventListener("click", () => {
    const botonRegistrate = document.getElementById("registrateAqui").value;
    onNavigate('/register')
    // signInWithEmail(botonRegistrate).then((rep)=>{
      
    // }).catch((err)=>{
    //   alert()
    // })
  })

  // Creación de un elemento button y asignación a la variable button
  const iniciarSesionBtn = document.createElement("button");
  //quitandole el add, me funciono
  iniciarSesionBtn.classList = "iniciarSesionBtn";
  contenedorGeneral.appendChild(iniciarSesionBtn);
  // Asignación del texto "Iniciar sesión" al elemento button
  iniciarSesionBtn.textContent = "Iniciar sesión";

  //obtener el valor mediante el event listener
  iniciarSesionBtn.addEventListener("click", () => {
    const email = document.getElementById("emailUsuario").value;
    const password = document.getElementById("passwordUsuario").value;

    signInWithEmail(email, password).then((rep)=>{
      onNavigate('/muro')
    }).catch((err)=>{
      alert('Verifica los datos, fue imposible registrarte');
    });
  });

  return contenedorGeneral;

}
