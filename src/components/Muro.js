
// import { onNavigate } from "./components/main"

import { doc } from "firebase/firestore/lite";
import { addpost, exit, listarPublicaciones } from "../lib/auth";
import { onNavigate } from "../lib/router";

export function muro() {
    const contenedorMuro = document.createElement("section")
    contenedorMuro.classList.add("contenedorMuro")

    //boton para cerrar la sesion
    const btnExit = document.createElement('button');
    btnExit.classList = "botonSalir";
    btnExit.textContent = 'Cerrar sesión';
    btnExit.addEventListener('click', ()=>{
        exit().then((resp)=>{
        onNavigate('/')
        })
    })
    contenedorMuro.appendChild(btnExit)
    
    const logoMuro = document.createElement("img");
    logoMuro.classList.add("logoMarchantesMuro");
    logoMuro.src = "../imagenes/logo-marchantes.png";
    contenedorMuro.appendChild(logoMuro);

    // input del texto/post
    const areaDelPost = document.createElement("textarea");
    areaDelPost.classList = "areaDelPost";
    areaDelPost.placeholder = "Escribe aqui..."
    contenedorMuro.appendChild(areaDelPost);


    const textoPost = document.createElement("button");
    textoPost.classlist = "areaDePost";
    textoPost.textContent = 'pruebaPost';
    contenedorMuro.appendChild(textoPost);
    textoPost.addEventListener('click', () => {
        const publicacion = areaDelPost.value;
        addpost(publicacion)
        console.log(addpost.publicacion)
    });

   


    return contenedorMuro
}