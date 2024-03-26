// état initial du reducer utilisateur. L'utilisateur est initialisé à null.
const initialState = {
    user: null,
  };
  
  
  // Reducer utilisateur
  function userReducer(state = initialState, action) {
    switch (action.type) {
        // Si 'USER_PROFILE_LOADED', l'utilisateur se met à jour avec la payload de l'action
        //1. L'action "USER_PROFILE_LOADED" est destinée à charger le profil utilisateur. 
        //Lorsque cette action est reçue, le reducer met à jour l'état en remplaçant la clé user par la valeur fournie dans action.payload.
        case "USER_PROFILE_LOADED":
            return { ...state, user: action.payload };
        // Lorsque l'action 'USER_PROFILE_LOADED' est dispatchée, l'utilisateur dans l'état de Redux est mis à jour avec la payload de l'action.

        // Si 'UPDATE_USERNAME', le nom d'utilisateur se met à jour avec la payload de l'action
        //2. L'action "UPDATE_USERNAME" est destinée à mettre à jour le nom d'utilisateur. 
        //Lorsque cette action est reçue, le reducer crée un nouvel objet d'état (newState) en copiant l'ancien état, 
        //puis en mettant à jour le nom d'utilisateur avec la valeur fournie dans action.payload.
        case "UPDATE_USERNAME": {
            let newState = { ...state, user: { ...state.user, userName: action.payload } };
            return newState;
        }
        // Lorsque l'action 'UPDATE_USERNAME' est dispatchée, le nom d'utilisateur dans l'état de Redux est mis à jour avec la payload de l'action.

        default:
            return state;
    }
  }
  
  
  export default userReducer;
  // export du reducer utilisateur pour l'utiliser dans le store Redux.