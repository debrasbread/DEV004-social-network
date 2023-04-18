//Este es el punto de entrada de tu aplicacion

import { addRoutes, onNavigate } from "./lib/router/index.js";
import { createHome } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
//import { loginGoogle } from "./lib/autenticar.js";

addRoutes({
  "/": createHome,
  "/Login": Login,
  "/register": Register,
  //"/loginGoogle": loginGoogle,
});

window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
