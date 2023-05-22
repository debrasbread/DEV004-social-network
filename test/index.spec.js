import { addRoutes } from '../src/lib/router/index.js';
import { home } from '../src/components/views/home.js';

test('La función home debe retornar un contenedor principal con sus elementos', () => {
  const container = document.createElement('div');

  container.appendChild(home());

  expect(container.querySelector('.backgroundImgH')).toBeTruthy();
  expect(container.querySelector('.logoH')).toBeTruthy();
  expect(container.querySelector('.iniciarSesionBtnH')).toBeTruthy();
  expect(container.querySelector('.registroLinkH')).toBeTruthy();
  expect(container.querySelector('.footerH')).toBeTruthy();

  const onNavigateMock = jest.fn();

  const originalOnNavigate = addRoutes.onNavigate;
  addRoutes.onNavigate = onNavigateMock;

  container.querySelector('.iniciarSesionBtnH').click();
  expect(onNavigateMock).toHaveBeenCalledWith('/login');

  container.querySelector('.registroLinkH a').click();
  expect(onNavigateMock).toHaveBeenCalledWith('/register');

  container.innerHTML = '';

  addRoutes.onNavigate = originalOnNavigate;
});
