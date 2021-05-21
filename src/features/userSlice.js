import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: null,
    userEmail: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.userId = action.payload.userId
            state.userEmail = action.payload.userEmail
        },
        setUserLogOutState: state => {
            state.userId = null
            state.userEmail = null
        }
    }
});

export const { setCurrentUser, setUserLogOutState } = userSlice.actions

export const getUserId = state => state.user.userId
export const getUserEmail = state => state.user.userEmail

export default userSlice.reducer