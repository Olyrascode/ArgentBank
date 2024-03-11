import { createSlice } from "@reduxjs/toolkit"
import { accountService } from "@/_Services/User.service"





const initialState = {
    token: accountService.getToken(),
    loading: 'idle',
    error: 'null',
}



export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null
        },

        setToken: (state, action) => {
            state.token = action.payload
        },
    },

}

)