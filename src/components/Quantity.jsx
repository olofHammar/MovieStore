import React from "react"
import { db } from "../firebase"
import "../styles/quantity.css"
import { useSelector } from "react-redux"
import { getUserId } from "../features/userSlice"

function Quantity({ quantity, id }) {
  const userId = useSelector(getUserId)

  const addQuantity = () => {
    if (!userId) return

    const add = quantity + 1

    const userRef = db.collection("users").doc(userId)
    const ref = userRef.collection("cartItems").doc(id)
    ref.update({
      quantity: parseInt(add),
    })
  }

  const substractQuantity = () => {
    if (!userId) return
    if (quantity === 1) return

    const substract = quantity - 1

    const userRef = db.collection("users").doc(userId)
    const ref = userRef.collection("cartItems").doc(id)
    ref.update({
      quantity: parseInt(substract),
    })
  }

  return (
    <div>
      <div className="quantityContainer">
        <button
          className="quantitySubstract"
          onClick={() => {
            substractQuantity()
          }}
        >
          &mdash;
        </button>
        <div className="quantityValue">
          <h4>{quantity}</h4>
        </div>
        <button
          className="quantityAdd"
          onClick={() => {
            addQuantity()
          }}
        >
          &#xff0b;
        </button>
      </div>
    </div>
  )
}

export default Quantity
