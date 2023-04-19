export function Register() {
  // Creación de div y asignación a variable container
  const container = document.createElement("div");

  // Imagen de fondo
  const backgroundImgRegister = document.createElement("img");
  backgroundImgRegister.classList.add("backgroundImgRegister");
  container.appendChild(backgroundImgRegister);

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

  // Imagen de fondo
  const backgroundImgResgister = document.createElement("img");
  backgroundImgResgister.classList.add("backgroundImgResgister");
  backgroundImgResgister.src = "../imagenes/background-mercado.jpg";
  container.appendChild(backgroundImgResgister);

  // Formulario
  const formulario = document.createElement("form");
  formulario.id = "formulario";
  formulario.classList.add("formulario-clase");

  // Nombre completo
  const labelNombreCompleto = document.createElement("label");
  labelNombreCompleto.textContent = "Nombre completo:";
  labelNombreCompleto.setAttribute("for", "nombreCompleto");

  const inputNombreCompleto = document.createElement("input");
  inputNombreCompleto.type = "text";
  inputNombreCompleto.id = "nombreCompleto";
  inputNombreCompleto.name = "nombreCompleto";
  inputNombreCompleto.required = true;
  inputNombreCompleto.classList.add("input-clase");

  formulario.append(labelNombreCompleto, inputNombreCompleto);

  // Correo electrónico
  const labelCorreoElectronico = document.createElement("label");
  labelCorreoElectronico.textContent = "Correo electrónico:";
  labelCorreoElectronico.setAttribute("for", "correoElectronico");

  const inputCorreoElectronico = document.createElement("input");
  inputCorreoElectronico.type = "email";
  inputCorreoElectronico.id = "correoElectronico";
  inputCorreoElectronico.name = "correoElectronico";
  inputCorreoElectronico.required = true;
  inputCorreoElectronico.classList.add("input-clase");

  formulario.append(labelCorreoElectronico, inputCorreoElectronico);

  // Contraseña
  const labelContrasena = document.createElement("label");
  labelContrasena.textContent = "Contraseña:";
  labelContrasena.setAttribute("for", "contrasena");

  const inputContrasena = document.createElement("input");
  inputContrasena.type = "password";
  inputContrasena.id = "contrasena";
  inputContrasena.name = "contrasena";
  inputContrasena.required = true;
  inputContrasena.classList.add("input-clase");

  formulario.append(labelContrasena, inputContrasena);

  // Repetir contraseña
  const labelRepetirContrasena = document.createElement("label");
  labelRepetirContrasena.textContent = "Repetir contraseña:";
  labelRepetirContrasena.setAttribute("for", "repetirContrasena");

  const inputRepetirContrasena = document.createElement("input");
  inputRepetirContrasena.type = "password";
  inputRepetirContrasena.id = "repetirContrasena";
  inputRepetirContrasena.name = "repetirContrasena";
  inputRepetirContrasena.required = true;
  inputRepetirContrasena.classList.add("input-clase");

  formulario.append(labelRepetirContrasena, inputRepetirContrasena);

  // Botón "Continuar"
  const continuarBtnLogin = document.createElement("button");
  continuarBtnLogin.classList.add("continuarBtnLogin");
  continuarBtnLogin.textContent = "Continuar";
  contenedorGeneral.appendChild(continuarBtnLogin);

  // Botón "Continuar con Google"
  const GoogleBtnLogin = document.createElement("button");
  GoogleBtnLogin.classList.add("GoogleBtnLogin");
  GoogleBtnLogin.textContent = "Continuar con Google";
  contenedorGeneral.appendChild(GoogleBtnLogin);

  // Logo de Google
  const logoGoogle = document.createElement("img");
  logoGoogle.src = "../imagenes/logo-google.png";
  GoogleBtnLogin.appendChild(logoGoogle);

  formulario.append(botonEnviar);

  // Agregar el formulario al body del documento
  document.body.append(formulario);

  return container;
}
