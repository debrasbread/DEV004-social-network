
// import { onNavigate } from "./components/main"

import { doc } from "firebase/firestore/lite";
import { exit } from "../lib/auth";
import { onNavigate } from "../lib/router";

export function muro() {
    const contenedorMuro = document.createElement("section")
    contenedorMuro.classList.add("contenedorMuro")

    //boton para cerrar la sesion
    const btnExit = document.createElement('button');
    btnExit.classList = "botonSalir";

    btnExit.textContent = 'Cerrar sesión'
    
    

    const logoMuro = document.createElement("img");
    logoMuro.classList.add("logoMarchantesMuro");
    logoMuro.src = "../imagenes/logo-marchantes.png";
    contenedorMuro.appendChild(logoMuro);

    //input del texto/post
    const areaDelPost = document.createElement("textarea");
    areaDelPost.classList = "areaDelPost";
    contenedorMuro.appendChild(areaDelPost);
    areaDelPost.placeholder = "Escribe aqui..."

    btnExit.addEventListener('click', ()=>{
        exit().then((resp)=>{
        onNavigate('/')
        })
    })
    contenedorMuro.appendChild(btnExit)


    return contenedorMuro
}