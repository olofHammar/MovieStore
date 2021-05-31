import React from 'react'
import '../styles/cart.css';

function Cart( { cartItems }) {
    return (
        <div className="cartContainer">
            <div className="cartItems">
                <h1 className="cartTitle"> Cart Items </h1>
                { cartItems.map(item => (
                    <div className="cartItem">
                    <h4>{ item.data.title}</h4>
                    <h5>{ item.data.quantity }</h5>
                    </div>
                ))
                }
            </div>
            <div className="cartTotal">
                <h1> Cart Total</h1>
            </div>
        </div>
    )
}

export default Cart
