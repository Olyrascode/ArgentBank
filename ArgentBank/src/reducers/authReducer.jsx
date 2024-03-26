/* Emplacement où l'état initial de votre reducer d'authentification est défini.
 Le token est initialisé à null.*/
 const initialState = {
    token: null,
  };
  
  // reducer authentification
  function authReducer(state = initialState, action) {
    switch (action.type) {
      // si 'USER_LOGIN' le token se met à jour avec la payload de l'action
      case "USER_LOGIN":
        return { ...state, token: action.payload };
      // si 'USER_LOGOUT',  le token se met à null
      case "USER_LOGOUT":
        return { ...state, token: null };
      // Lorsque l'action 'USER_LOGOUT' est dispatchée, le token dans l'état de Redux est réinitialisé à null.
      default:
        return state;
    }
  }
  
  // Export du reducer d'authentification pour l'utiliser dans le store Redux.
  export default authReducer;