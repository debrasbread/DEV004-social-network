// importamos la funcion que vamos a testear
/*
import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

*/

import { home } from './src/components/views/home'; // Corregir ruta

test('La función home debe retornar un contenedor principal con los elementos adecuados', () => {

});

const container = document.createElement('div');

container.appendChild(home());

expect(container.querySelector('.backgroundImgH')).toBeTruthy();
expect(container.querySelector('.logoH')).toBeTruthy();
expect(container.querySelector('.iniciarSesionBtnH')).toBeTruthy();
expect(container.querySelector('.registroLinkH')).toBeTruthy();
expect(container.querySelector('.footerH')).toBeTruthy();

const onNavigateMock = jest.fn();

container.querySelector('.iniciarSesionBtnH').click();
expect(onNavigateMock).toHaveBeenCalledWith('/login');

container.querySelector('.registroLinkH').click();
expect(onNavigateMock).toHaveBeenCalledWith('/register');

afterEach(() => {
  // Restaurar el estado original del DOM después de cada prueba
  container.innerHTML = '';
});
