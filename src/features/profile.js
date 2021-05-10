import { createAction, createReducer } from "@reduxjs/toolkit";

const changeName = createAction('change name');

const actions = { changeName };

const initialState = {
    name : ''
};

const reducer = createReducer(initialState, {
    [changeName] : (state, action) => ({
        name : action.payload
    })
})

export { actions, reducer };