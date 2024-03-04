const initialState = {
    user: null,
};

function userReducer(state = initialState, action) {
    switch (action.type) {

        case "USER_PROFIL_LOADED":
            return {...state, user: action.payload};

        case "UPDATE_USERNAME":
            const newState = { ...state, user: { ...state.user, userName: action.payload}};
            return newState;

        default: 
            return state;
    }
}

export default userReducer;