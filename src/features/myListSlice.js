import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: null
}

const myListSlice = createSlice({
    name: 'myList',
    initialState,
    reducers: {
        setList: (state, action) => {
            state.movies = action.payload.movies
        }
        /*
        deleteList: (state, action) => {
            state.movies = ([...state.movies.filter(movie => movie !== action.payload)])
        }
        */
    }
});

export const { setList } = myListSlice.actions

export const getMyList = state => state.myList.movies

export default myListSlice.reducer