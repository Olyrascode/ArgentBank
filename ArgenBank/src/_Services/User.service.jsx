// /** Import des modules nécessaires */
// // import Axios from './callerService.js'
// import Axios from 'axios';
// import { useSelector } from 'react-redux';
// // fonction login
// let loginUser = (data) => {
//     return Axios.post('/api/v1/user/login', data)
// }

// //ICI tu mets toutes t'est fonction qui sont lié à USER 
// // du coup Update, getprofil , gettoken , settoken etc... 
// // fonction useToken


// // export const useToken = () => {
// //     const token = useSelector(state => state.auth.token);
// //     return token;
// // }
// // export des fonction pour les reutiliser dans les pages
// export const accountService = {
//     loginUser,
//     // useToken,

// }
import Axios from 'axios';

// Fonction pour l'authentification de l'utilisateur
let loginUser = (data) => {
    return Axios.post('/api/v1/user/login', data);
}

// Fonction pour récupérer le token
let getToken = () => {
    return localStorage.getItem('token');
}

// Fonction pour définir le token
let setToken = (token) => {
    localStorage.setItem('token', token);
}

// Fonction pour supprimer le token
let removeToken = () => {
    localStorage.removeItem('token');
}

export const accountService = {
    loginUser,
    getToken,
    setToken,
    removeToken,
};

