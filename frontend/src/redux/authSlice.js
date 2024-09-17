import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    auth: true
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken : (state, action) => {
            state.token = action.payload
        }
    }
})

export const {setToken} = AuthSlice.actions
export default AuthSlice.reducer