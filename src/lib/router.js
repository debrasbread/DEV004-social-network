const routes = {
    "/": "home",
    "/logIn": "logIn",
    "/signUp": "signUp"
  };

  window.onhashchange = () => {
    // Lógica para cambiar la vista según la ruta actual
  };

  const app = document.querySelector("#app");

const renderView = (view) => {
  app.innerHTML = views[view];
};

window.onload = () => {
    const currentRoute = window.location.hash;
    const view = routes[currentRoute];
    renderView(view);
  };

  
  