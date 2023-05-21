import { onNavigate } from '../../lib/router/index';

export function home() {
  // Creación de main y asignación a variable home
  const containerHome = document.createElement('main');

  // Imagen de fondo
  const backgroundImgHome = document.createElement('img');
  backgroundImgHome.classList.add('backgroundImgH');
  containerHome.appendChild(backgroundImgHome);

  // Contenedor de elementos
  const contenedorGeneralHome = document.createElement('main');
  contenedorGeneralHome.id = 'contenedor-GeneralH';
  contenedorGeneralHome.classList.add('contenedorGeneralH');
  containerHome.appendChild(contenedorGeneralHome);

  // Logo
  const logoHome = document.createElement('img');
  logoHome.classList.add('logoH');
  logoHome.src = '../imagenes/logo-marchantes.png';
  contenedorGeneralHome.appendChild(logoHome);

  // Botón 'Iniciar sesión'
  const iniciarSesionBtnHome = document.createElement('button');
  iniciarSesionBtnHome.classList.add('iniciarSesionBtnH');
  iniciarSesionBtnHome.textContent = 'Iniciar sesión';

  iniciarSesionBtnHome.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/login');
  });

  contenedorGeneralHome.appendChild(iniciarSesionBtnHome);

  // Texto e hipervínculo 'Regístrate'
  const registroLinkHome = document.createElement('p');
  registroLinkHome.classList.add('registroLinkH');
  registroLinkHome.innerHTML = '¿No tienes una cuenta? <a href="#">Regístrate</a>.';
  contenedorGeneralHome.appendChild(registroLinkHome);

  registroLinkHome.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/register');
  });
  contenedorGeneralHome.appendChild(registroLinkHome);

  // Footer
  const footerHome = document.createElement('footer');
  footerHome.id = 'footer-Home';
  footerHome.classList.add('footerH');
  footerHome.textContent = 'Marchantes, 2023';
  contenedorGeneralHome.appendChild(footerHome);

  // Retorna el contenedor principal
  return containerHome;
}
