import { combineReducers } from "redux";


import userReducer from "./user.reducer";
import authReducer from "./authReducer";


export default combineReducers({
    auth: authReducer,
    user: userReducer, 
});