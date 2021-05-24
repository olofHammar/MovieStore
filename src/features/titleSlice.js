import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: null,
}

const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload.title
        }
    }
});

export const { setTitle } = titleSlice.actions

export const getTitle = state => state.title.title

export default titleSlice.reducer