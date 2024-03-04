const initialState = {
    token: null,
};

function authReducer(state = initialState, action) {
    switch (action.type) {

        case "USER_LOGIN":
            return { ...state, token:action.payload};

            case "USER_LOGOUT":
                return {...state, token: null};
        default:
            return state;
    }
}

export default authReducer