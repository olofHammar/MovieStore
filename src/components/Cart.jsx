import React from "react"
import "../styles/cart.css"

function Cart({ cartItems }) {
  return (
    <div className="cartContainer">
      <div className="cartItems">
        <h1 className=""> Cart Items </h1>
        {cartItems.map((item) => (
          <div className="">
            <h4>
              {item.data.title}
                <input className="inputQuantity" type="text" maxLength="3" value={item.data.quantity} autoComplete="off" aria-label="Quantity"/>
              <p>
              Quantity: 
                <button className="quantityButton"> - </button>
                {item.data.quantity}
                <button className="quantityButton"> + </button>
              </p>
            </h4>
            Total price:
            <p>{item.data.price * item.data.quantity} $</p>
            <div>
              <img className="movie_poster" src={item.data.poster} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Total Cost:</h2>
      </div>

      <div className="clearButton">
        <h2>
          <button>Clear Button</button>
        </h2>
        <h2>
          <button>Check out</button>
        </h2>
      </div>
    </div>
  )
}

export default Cart
