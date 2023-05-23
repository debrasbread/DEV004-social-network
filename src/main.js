import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addRoutes, onNavigate } from './lib/router/index.js';
import { home } from './components/views/home.js';
import { login } from './components/views/login.js';
import { register } from './components/views/register.js';
import { feed } from './components/views/feed.js';

// document.addEventListener('DOMContentLoaded', () => {
addRoutes({
  '/': home,
  '/login': login,
  '/register': register,
  '/feed': feed,
});
window.onload = () => {
  onNavigate(window.location.pathname);
};
window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    onNavigate('/feed');
  } else {
    onNavigate('/');
  }
});
// });
