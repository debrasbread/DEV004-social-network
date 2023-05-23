import { addRoutes } from '../src/lib/router/index.js';
import { home } from '../src/components/views/home.js';
import { register } from '../src/components/views/register.js';
/*
import { login } from '../src/components/views/login.js';
import { feed } from '../src/components/views/feed.js';
import {
  createUser,
  signInGoogle,
  createPost,
  editPost,
  deletePost,
  isAuthor,
} from '../../lib/firebase/autenticar';
*/
// home
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

// register
test('La función register debe retornar un contenedor principal con sus elementos', () => {
  const container = document.createElement('div');

  container.appendChild(register());

  expect(container.querySelector('.backgroundImgR')).toBeTruthy();
  expect(container.querySelector('.logoR')).toBeTruthy();
  expect(container.querySelector('.formularioR')).toBeTruthy();
  expect(container.querySelector('.continuarBtnR')).toBeTruthy();
  expect(container.querySelector('.googleBtnR')).toBeTruthy();
  expect(container.querySelector('.footerR')).toBeTruthy();

  const onNavigateMock = jest.fn();

  const originalOnNavigate = addRoutes.onNavigate;
  addRoutes.onNavigate = onNavigateMock;

  container.querySelector('.continuarBtnR').click();
  expect(onNavigateMock).toHaveBeenCalledWith('/feed');

  container.querySelector('.googleBtnR').click();
  expect(onNavigateMock).toHaveBeenCalledWith('/feed');

  container.innerHTML = '';

  addRoutes.onNavigate = originalOnNavigate;
});
/*
// login
test('La función login debe retornar un contenedor principal con sus elementos', () => {
  const container = document.createElement('div');
  container.appendChild(login());

  expect(container.querySelector('.backgroundImgL')).toBeTruthy();
  expect(container.querySelector('.logoL')).toBeTruthy();
  expect(container.querySelector('.iniciarSesionL')).toBeTruthy();
  expect(container.querySelector('.nombreLabelL')).toBeTruthy();
  expect(container.querySelector('.nombreInputL')).toBeTruthy();
  expect(container.querySelector('.emailLabelL')).toBeTruthy();
  expect(container.querySelector('.emailInputL')).toBeTruthy();
  expect(container.querySelector('.contraseñaLabelL')).toBeTruthy();
  expect(container.querySelector('.contraseñaInputL')).toBeTruthy();
  expect(container.querySelector('.continuarBtnL')).toBeTruthy();
  expect(container.querySelector('.googleBtnL')).toBeTruthy();
  expect(container.querySelector('.footerL')).toBeTruthy();

  const onNavigateMock = jest.fn();
  const loginUserMock = jest.fn();

  const originalOnNavigate = addRoutes.onNavigate;
  addRoutes.onNavigate = onNavigateMock;

  const originalLoginUser = signInGoogle.loginUser;
  signInGoogle.loginUser = loginUserMock;

  container.querySelector('.continuarBtnL').click();
  expect(loginUserMock).toHaveBeenCalled();
  expect(onNavigateMock).toHaveBeenCalledWith('/feed');

  container.querySelector('.googleBtnL').click();
  expect(onNavigateMock).toHaveBeenCalledWith('/feed');

  container.innerHTML = '';

  addRoutes.onNavigate = originalOnNavigate;
  signInGoogle.loginUser = originalLoginUser;
});

// feed
test('La función feed debe retornar un contenedor principal con sus elementos', () => {
  const container = document.createElement('div');
  container.appendChild(feed());

  expect(container.querySelector('.backgroundImgF')).toBeTruthy();
  expect(container.querySelector('.contenedorGeneralF')).toBeTruthy();
  expect(container.querySelector('.logoF')).toBeTruthy();
  expect(container.querySelector('.compose-container')).toBeTruthy();
  expect(container.querySelector('.compose-text')).toBeTruthy();
  expect(container.querySelector('.compose-options')).toBeTruthy();
  expect(container.querySelector('.compose-option')).toBeTruthy();
  expect(container.querySelector('.compose-image-upload')).toBeTruthy();
  expect(container.querySelector('.compose-send')).toBeTruthy();
  expect(container.querySelector('.logout-button')).toBeTruthy();
  expect(container.querySelector('#posts-container')).toBeTruthy();

  const onNavigateMock = jest.fn();
  const createPostMock = jest.fn();
  const editPostMock = jest.fn();
  const deletePostMock = jest.fn();
  const isAuthorMock = jest.fn();
  const verPostsMock = jest.fn();

  const originalOnNavigate = addRoutes.onNavigate;
  addRoutes.onNavigate = onNavigateMock;

  const originalCreatePost = createPost;
  createPost = createPostMock;

  const originalEditPost = editPost;
  editPost = editPostMock;

  const originalDeletePost = deletePost;
  deletePost = deletePostMock;

  const originalIsAuthor = isAuthor;
  isAuthor = isAuthorMock;

  const originalVerPosts = verPosts;
  verPosts = verPostsMock;

  container.querySelector('.compose-send').click();
  expect(createPostMock).toHaveBeenCalled();

  container.querySelector('#logout-button').click();
  expect(onNavigateMock).toHaveBeenCalledWith('/');

  container.innerHTML = '';

  addRoutes.onNavigate = originalOnNavigate;
  createPost = originalCreatePost;
  editPost = originalEditPost;
  deletePost = originalDeletePost;
  isAuthor = originalIsAuthor;
  verPosts = originalVerPosts;
});

// autenticar

// Mock de las funciones y objetos necesarios
jest.mock('firebase/app', () => ({
  // Mock de initializeApp
  initializeApp: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  // Mock de las funciones de autenticación
  getAuth: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signInWithPopup: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  updateProfile: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  // Mock de las funciones de firestore
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  query: jest.fn(),
  onSnapshot: jest.fn(),
  Timestamp: {
    now: jest.fn(),
  },
  doc: jest.fn(),
  updateDoc: jest.fn(),
  deleteDoc: jest.fn(),
  orderBy: jest.fn(),
}));

// Mock de firebaseConfig
jest.mock('./firebase', () => ({
  firebaseConfig: {},
}));

// Pruebas para la función createUser
describe('createUser', () => {
  it('should create a user and update the display name', async () => {
    // Mock de los valores necesarios
    const email = 'test@example.com';
    const password = 'password';
    const nombre = 'Test User';
    const userCredential = {
      user: {
        email,
        displayName: null,
      },
    };

    // Configurar los mocks de las funciones
    createUserWithEmailAndPassword.mockResolvedValueOnce(userCredential);
    updateProfile.mockResolvedValueOnce();

    // Llamar a la función que se está probando
    await createUser(nombre, email, password);

    // Verificar que las funciones se hayan llamado correctamente
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      email,
      password,
    );
    expect(updateProfile).toHaveBeenCalledWith(userCredential.user, {
      displayName: nombre,
    });
  });

  it('should handle errors', async () => {
    // Mock de los valores necesarios
    const email = 'test@example.com';
    const password = 'password';
    const nombre = 'Test User';

    createUserWithEmailAndPassword.mockRejectedValueOnce(new Error('Test error'));

    // Llamar a la función que se está probando
    await expect(createUser(nombre, email, password)).rejects.toThrow('Test error');

    // Verificar que la función se haya llamado correctamente
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      email,
      password,
    );
  });
});

// Pruebas para la función loginUser
describe('loginUser', () => {
  it('should sign in the user', async () => {
    // Llamar a la función que se está probando
    await loginUser();
  });

  it('should handle errors', async () => {
    // signInWithEmailAndPassword.mockRejectedValueOnce(new Error('Test error'));

    // await expect(loginUser()).rejects.toThrow('Test error');
  });
});

// Pruebas para la función createPost
describe('createPost', () => {
  it('should create a new post', async () => {
    // Mock de los valores necesarios
    const data = 'Test post';
    const currentUser = {
      email: 'test@example.com',
      displayName: 'Test User',
    };

    // Configurar los mocks de las funciones y objetos necesarios
    const addDocMock = jest.fn();
    const collectionMock = jest.fn(() => ({
      addDoc: addDocMock,
    }));

    jest.spyOn(auth, 'currentUser', 'get').mockReturnValue(currentUser);
    jest.spyOn(firebase, 'collection').mockImplementation(collectionMock);

    // Llamar a la función que se está probando
    await createPost(data);

    // Verificar que las funciones se hayan llamado correctamente
    expect(collectionMock).toHaveBeenCalledWith(firestore, 'post');
    expect(addDocMock).toHaveBeenCalledWith(expect.any(Object), {
      text: data,
      email: currentUser.email,
      date: expect.any(Object),
      name: currentUser.displayName,
    });
  });
});

// Pruebas para la función verPosts
describe('verPosts', () => {
  it('should listen to post changes', () => {
    // Mock de la función onSnapshot
    const onSnapshotMock = jest.fn();

    const queryMock = jest.fn(() => ({
      onSnapshot: onSnapshotMock,
    }));

    jest.spyOn(firebase, 'query').mockImplementation(queryMock);

    // Llamar a la función que se está probando
    const callback = jest.fn();
    verPosts(callback);

    // Verificar que las funciones se hayan llamado correctamente
    expect(queryMock).toHaveBeenCalledWith(expect.any(Object), orderBy('date', 'desc'));
    expect(onSnapshotMock).toHaveBeenCalledWith(expect.any(Function), callback);
  });
});

// Pruebas para la función editPost
describe('editPost', () => {
  it('should edit a post', async () => {
    // Mock de los valores necesarios
    const postId = 'test-post-id';
    const newData = { text: 'Updated post' };

    // Configurar el mock de la función updateDoc
    const updateDocMock = jest.fn();

    const docMock = jest.fn(() => ({
      updateDoc: updateDocMock,
    }));

    jest.spyOn(firebase, 'doc').mockImplementation(docMock);

    // Llamar a la función que se está probando
    await editPost(postId, newData);

    // Verificar que las funciones se hayan llamado correctamente
    expect(docMock).toHaveBeenCalledWith(firestore, 'post', postId);
    expect(updateDocMock).toHaveBeenCalledWith(expect.any(Object), newData);
  });
});

// Pruebas para la función deletePost
describe('deletePost', () => {
  it('should delete a post', async () => {
    // Mock del postId
    const postId = 'test-post-id';

    // Configurar el mock de la función deleteDoc
    const deleteDocMock = jest.fn();

    const docMock = jest.fn(() => ({
      deleteDoc: deleteDocMock,
    }));

    jest.spyOn(firebase, 'doc').mockImplementation(docMock);

    // Llamar a la función que se está probando
    await deletePost(postId);

    // Verificar que las funciones se hayan llamado correctamente
    expect(docMock).toHaveBeenCalledWith(firestore, 'post', postId);
    expect(deleteDocMock).toHaveBeenCalledWith(expect.any(Object));
  });
});

// Pruebas para la función isAuthor
describe('isAuthor', () => {
  it('should return true if the current user is the author of the post', () => {
    // Mock de los valores necesarios
    const currentUser = {
      email: 'test@example.com',
    };

    const post = {
      email: 'test@example.com',
    };

    // Configurar el mock de la propiedad currentUser
    jest.spyOn(auth, 'currentUser', 'get').mockReturnValue(currentUser);

    // Llamar a la función que se está probando
    const result = isAuthor(post);

    // Verificar el resultado
    expect(result).toBe(true);
  });

  it('should return false if the current user is not the author of the post', () => {
    // Mock de los valores necesarios
    const currentUser = {
      email: 'test@example.com',
    };

    const post = {
      email: 'another@example.com',
    };

    // Configurar el mock de la propiedad currentUser
    jest.spyOn(auth, 'currentUser', 'get').mockReturnValue(currentUser);

    // Llamar a la función que se está probando
    const result = isAuthor(post);

    // Verificar el resultado
    expect(result).toBe(false);
  });

  it('should return false if there is no current user', () => {
    // Mock de la propiedad currentUser para que sea null
    jest.spyOn(auth, 'currentUser', 'get').mockReturnValue(null);

    // Llamar a la función que se está probando
    const result = isAuthor({ email: 'test@example.com' });

    // Verificar el resultado
    expect(result).toBe(false);
  });
});
*/
