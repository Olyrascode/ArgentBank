import { createSlice } from "@reduxjs/toolkit"

import { accountService } from "@/_Services/accountService";

const initialState = {
    token: accountService.getToken(),
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