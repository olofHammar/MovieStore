import React from 'react'
import '../styles/cart.css';

function Cart( { cartItems }) {
    return (
        <div className="cartContainer">
            <div className="cartItems">
                <h1 className=""> Cart Items </h1>
                { cartItems.map(item => (
                    <div className="">
                    <h4>
                        { item.data.title}
                        { item.data.price}
                        <p>
                        <button onClick={item.data.quantity - 1}> - </button>
                        {item.data.quantity}
                        <button onClick={item.data.quantity + 1}> + </button>
                        </p>
                        
                    </h4>
                    Total price:
                    
                    <p>{item.data.price * item.data.quantity} $</p>
                   
                    <div>
                     <img className="movie_poster" src={item.data.poster}/>
                    </div>
                    
                    </div>
                ))
                }
            </div>
            <div className="cartItem">
            { cartItems.map(item => (
                <p>{item.data.price} $</p>
            ))
            }
                <h1> Cart Total</h1>
                
            </div>
            <div>
                <h2><button>Clear Button</button></h2>
            </div>
        </div>
    )
}

export default Cart
