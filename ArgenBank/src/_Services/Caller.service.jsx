/** Import des modules nécessaires */
import axios from 'axios'
import { UserService } from './User.service.js'

const Axios = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
})

/**
 * Interceptor pour injection token
 */
Axios.interceptors.request.use(request => {

    // Si connecté on ajoute le token dans l'entête
    if (UserService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + UserService.getToken()
    }

    return request
})

/**
 * Interceptor des réponses de l'API
 */
Axios.interceptors.response.use(response => {
    return response
}, error => {

    if (error.response.status === 401) {
        UserService.logout()
        window.location.reload()
    }
})

export default Axios