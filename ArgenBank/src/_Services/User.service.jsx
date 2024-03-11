/** Import des modules nécessaires */
// import Axios from './callerService.js'
import Axios from 'axios';
import { useSelector } from 'react-redux';

// fonction login
let loginUser = (data) => {
    return Axios.post('/api/v1/user/login', data)
}

//ICI tu mets toutes t'est fonction qui sont lié à USER 
// du coup Update, getprofil , gettoken , settoken etc... 



export const getToken = () => {
    const token = useSelector(state => state.auth.token);
    return token;
}
// export des fonction pour les reutiliser dans les pages
export const accountService = {
    loginUser,
    // useToken,
  
}

