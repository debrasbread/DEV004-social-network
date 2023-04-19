import { addRoutes, onNavigate } from "./lib/router/index.js";
import { home } from "./components/home.js";
import { login } from "./components/login.js";
import { register } from "./components/register.js";
//import { feed } from './components/feed.js';
//import { loginGoogle } from "./lib/autenticar.js";

addRoutes({
  "/": home,
  "/login": login,
  "/register": register,
  //"/feed": feed,
  //"/loginGoogle": loginGoogle,
});

window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
