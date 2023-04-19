//Este es el punto de entrada de tu aplicacion

import { addRoutes, onNavigate } from "./lib/router/index.js";
import { createHome } from "./components/Home";
import { Login } from "./components/Login";
//import { Register } from "./components/Register";
import { muro } from "./components/Muro.js";

addRoutes({
  "/": createHome,
  // "/Login": Login,no es necesario
  // "/register": Register,
  "/muro": muro,
});

window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
