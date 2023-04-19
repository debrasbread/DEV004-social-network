export function login() {
  // Creación de main y asignación a variable container
  const containerLogin = document.createElement("main");

  // Imagen de fondo
  const backgroundImgLogin = document.createElement("img");
  backgroundImgLogin.classList.add("backgroundImgL");
  containerLogin.appendChild(backgroundImgLogin);

  // Contenedor de elementos
  const contenedorGeneralLogin = document.createElement("main");
  contenedorGeneralLogin.id = "contenedor-GeneralL";
  contenedorGeneralLogin.classList.add("contenedorGeneralL");
  containerLogin.appendChild(contenedorGeneralLogin);

  // Logo
  const logoLogin = document.createElement("img");
  logoLogin.classList.add("logoL");
  logoLogin.src = "../imagenes/logo-marchantes.png";
  contenedorGeneralLogin.appendChild(logoLogin);

  // Texto "Iniciar sesión"
  const iniciarSesionLogin = document.createElement("h1");
  iniciarSesionLogin.id = "iniciarSesionL";
  iniciarSesionLogin.classList.add("iniciarSesionL");
  iniciarSesionLogin.textContent = "Iniciar sesión";
  contenedorGeneralLogin.appendChild(iniciarSesionLogin);

  // Texto "Email" + label + input
  const emailLabelLogin = document.createElement("label");
  emailLabelLogin.setAttribute("for", "email-InputL");
  emailLabelLogin.id = "email-LabelL";
  emailLabelLogin.textContent = "Email:";
  emailLabelLogin.classList.add("emailLabelL");
  contenedorGeneralLogin.append(emailLabelLogin);

  const emailInputLogin = document.createElement("input");
  emailInputLogin.setAttribute("id", "email-InputL");
  emailInputLogin.setAttribute("type", "email");
  emailInputLogin.classList.add("emailInputL");
  contenedorGeneralLogin.append(emailInputLogin);

  // Texto "Contraseña" + label + input
  const contraseñaLabelLogin = document.createElement("label");
  contraseñaLabelLogin.textContent = "Contraseña:";
  contraseñaLabelLogin.setAttribute("for", "contraseña-InputL");
  contraseñaLabelLogin.id = "contraseña-LabelL";
  contraseñaLabelLogin.classList.add("contraseñaLabelL");
  contenedorGeneralLogin.appendChild(contraseñaLabelLogin);

  const contraseñaInputLogin = document.createElement("input");
  contraseñaInputLogin.setAttribute("type", "password");
  contraseñaInputLogin.setAttribute("id", "contraseña-InputL");
  contraseñaInputLogin.setAttribute("name", "contraseña");
  contraseñaInputLogin.classList.add("contraseñaInputL");
  contenedorGeneralLogin.appendChild(contraseñaInputLogin);

  // Botón "Continuar"
  const continuarBtnLogin = document.createElement("button");
  continuarBtnLogin.classList.add("continuarBtnL");
  continuarBtnLogin.textContent = "Continuar";
  continuarBtnLogin.id = "continuar-BtnL";
  contenedorGeneralLogin.appendChild(continuarBtnLogin);

  // Botón "Continuar con Google"
  const GoogleBtnLogin = document.createElement("button");
  GoogleBtnLogin.classList.add("GoogleBtnL");
  GoogleBtnLogin.textContent = "Continuar con Google";
  GoogleBtnLogin.id = "continuar-GoogleBtnL";
  contenedorGeneralLogin.append(GoogleBtnLogin);

  // Logo de Google
  const logoGoogle = document.createElement("img");
  logoGoogle.src = "../imagenes/logo-google.png";
  logoGoogle.classList.add("logoGoogleL");
  GoogleBtnLogin.append(logoGoogle);

  //Footer
  const footerLogin = document.createElement("footer");
  footerLogin.id = "footer-Login";
  footerLogin.classList.add("footerL");
  footerLogin.textContent = "Marchantes, 2023";
  contenedorGeneralLogin.appendChild(footerLogin);

  // Retorna el elemento div (con sus elementos hijos dentro)
  return containerLogin;
}
