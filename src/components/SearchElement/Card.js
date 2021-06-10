import React from "react"
import { useSelector } from "react-redux"
import { db } from "../../firebase"
import { getUserId } from "../../features/userSlice"

export default function Card({ movie }) {
  const userId = useSelector(getUserId)
  const price = 19.99
  const itemId = movie.Title

  const addToCart = () => {

    const cartItem = db
      .collection("users")
      .doc(userId)
      .collection("cartItems")
      .doc(movie.imdbID)

    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        })
        let btn = document.getElementById(itemId)
        btn.innerText = "item added!"
        setTimeout(function () {
          btn.innerText = "Add to cart"
        }, 1000)
      } else {
        cartItem.set({
          id: movie.imdbID,
          title: movie.Title,
          poster: movie.Poster,
          price: price,
          quantity: 1,
        })
        
        let btn = document.getElementById(itemId)
        btn.innerText = "item added!"
        setTimeout(function () {
          btn.innerText = "Add to cart"
        }, 1000)
      }
    })
  }

  return (
    <div className="cardContainer">
      <img className="cardPoster" src={movie.Poster} alt={movie.Title} />
      <div className="infoContainer">
        <div className="textContainer">
          <h4 className="cardText">
            {`Title: `}
            <span>{movie.Title}</span>
          </h4>
          <h5 className="cardText">
            {`Year: `}
            <span>{movie.Year}</span>
          </h5>
          <h5 className="cardText">
            {`Price: `}
            <span>$19.99</span>
          </h5>
        </div>
        <div className="buttonContainer">
          {!userId ? (
            <></>
          ) : (
            <div className="btnSearchContainer">
              <button
                className="btnModalSearch"
                id={itemId}
                onClick={addToCart}
              >
                Add to cart{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
