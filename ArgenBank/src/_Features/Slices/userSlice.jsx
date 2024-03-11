import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pseudo: '',
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.pseudo = action.payload.pseudo;
        },
    },

}

)