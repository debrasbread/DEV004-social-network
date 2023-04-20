import { addRoutes, onNavigate } from "./lib/router/index.js";
import { home } from "./components/views/home.js";
import { login } from "./components/views/login.js";
import { register } from "./components/views/register.js";
import { feed } from "./components/views/feed.js";
//import { loginGoogle } from "./lib/autenticar.js";

addRoutes({
  "/": home,
  "/login": login,
  "/register": register,
  "/feed": feed,
  //"/loginGoogle": loginGoogle,
  //"/post": post, // El post podría ir dentro del feed y ser una especie de ventana emergente (?)
});

window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
