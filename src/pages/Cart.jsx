import React, { useEffect } from "react"
import "../styles/cart.css"
import Quantity from "../components/Quantity"
import DeleteAlert from "../components/DeleteAlert"
import { useSelector } from "react-redux"
import { getUserId } from "../features/userSlice"
import NumberFormat from "react-number-format"
import CheckoutAlert from "../components/CheckoutAlert"

function Cart({ cartItems }) {
  const userId = useSelector(getUserId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getTotalPrice = () => {
    let total = 0
    cartItems.forEach((item) => {
      total += item.data.price * item.data.quantity
    })
    return (Math.round(total * 100) / 100).toFixed(2)
  }

  const getCount = () => {
    let count = 0
    cartItems.forEach((item) => {
      count += item.data.quantity
    })
    return count
  }

  return (
    <div className="cartContainer">

      {userId ? (
        <>
          <div className="cartTotal">
            <h1> Cart Total</h1>
            <div>
              <h4 className="cartItemPrice">Total movies: {getCount()}</h4>
              <h4 className="cartItemPrice">
                Total price:{" "}
                <NumberFormat
                  value={getTotalPrice()}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </h4>
            </div>
            <CheckoutAlert className="btnCartCheckOut" cartItems={cartItems} />
          </div>


          <div className="cartItems">
            <h1 className="cartTitle"> My Cart </h1>
            <>
              {cartItems.length === 0 ? (
                <h4 className="emptyCartMsg">
                  Your cart is empty. Add movies to proceed with check out.
                </h4>
              ) : (
                <></>
              )}
            </>
            {cartItems.map((item, i) => (
              <div className="cartItem" key={i}>
                <img src={item.data.poster} alt="" className="cartItemPoster" />


            <div className="cartItemInfo">
              <h2 className="cartItemTitle">{item.data.title}</h2>
              <h4 className="cartItemPrice">{`Price: $${item.data.price}`}</h4>
            </div>
            <div className="cartItemRight">
              <DeleteAlert userId={userId} id={item.data.id} />
              <Quantity quantity={item.data.quantity} id={item.data.id} />
            </div>

            </div>
            ))}
          </div>
        </>
      ) : (
        <div className="cartSignInContainer">
          <h4>Sign in to access your cart.</h4>
        </div>
      )}
    </div>
  )
}

export default Cart
