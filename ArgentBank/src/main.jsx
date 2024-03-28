import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/Sass/main.scss";
import App from "./App";


// Importation des composants Redux
import { Provider } from "react-redux"; // Fournit le store Redux à votre application React
import { configureStore } from "@reduxjs/toolkit"; // Fonction pour créer le store Redux
import rootReducer from "./reducers"; // Le reducer racine de votre application

/* Récupération du token d'authentification depuis le localStorage
 ou le sessionstorage. Il est ensuite initialisé dans le state Redux.*/
const persistedState = {
  auth: {
    token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  },
};

// Configuration du store Redux
const store = configureStore({
  reducer: rootReducer, // Le reducer racine permet de gérer les actions de l'app.
  preloadedState: persistedState, // initialisation du store avec le state persisté
  devTools: true, // active les outils de développement Redux
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //j'entoure mon App par un provider pour rendre disponnible mon store à toute mon app
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

