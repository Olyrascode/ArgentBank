// Importation de la fonction combineReducers de Redux
import { combineReducers } from "redux";
// fonction qui permet de combiner plusieurs reducers en un seul.

// Importation des reducers
import authReducer from "./authReducer"; // Gère l'état d'authentification
import userReducer from "./userReducer"; // Gère l'état de l'utilisateur

// Combinaison des reducers
const rootReducer = combineReducers({
    auth: authReducer, // Le reducer d'authentification est mappé à la clé 'auth'
    user: userReducer, // Le reducer utilisateur est mappé à la clé 'user'
});

export default rootReducer;
