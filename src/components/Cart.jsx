import React from 'react'
import styles from '../styles/cart.css';
import { createReducer, createAction } from '@reduxjs/toolkit';


const addToCart = createAction('add to cart')
const removeFromCart = createAction('remove from cart')
const increaseAmount = createAction('increase amount')
const decreaseAmont = createAction('decrease amount')

const action = {addToCart, removeFromCart, increaseAmount, decreaseAmont}

const initialState = [
    //product {name: ' ', price: ' '},
    //count : 1
]



const reducer = createReducer(initialState, {
    [addToCart]: (state, action) => {
        let found = state.find(cartItem => cartItem.product.name === action.payload.name);
        if( found ) {
            const newState =state.map(cartItem => {
                if (cartItem.product.name === action.payload.name) {
                    return { ...cartItem, count: cartItem.count + 1 }
                } else {
                    return cartItem;
                }
            })  
            return newState;

        } else {
            return [
                ...state,
                {product: action.payload, count: 1}
            ];
        }

    },

    [increaseAmount]: (state, action) => (
        state.map(cartItem => {
            if (cartItem.product.name === action.payload.name) {
                return { ...cartItem, count: cartItem.count + 1 }
            } else {
                return cartItem;
            }
        })  
    ),

    [decreaseAmont]: (state, action) => (
        state.map(cartItem => {
            if (cartItem.product.name === action.payload.name) {
                return { ...cartItem, count: cartItem.count - 1 }
            } else {
                return cartItem;
            }
        })  
    ),

    [removeFromCart]: (state, action) => (
       state.filter(cartItem => cartItem.product.name !== action.payload.name)
    )

})

function Cart() {
    return (
        <div>
            <h1 className="cartContainer"> This is Shoppingcart </h1>
        </div>
    )
}

export default Cart
