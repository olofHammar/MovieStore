import React from "react"
import image from "../../img/marvel_logo.jpeg"
import "../../styles/rowMarvel.css"
import c_image from "../../img/mn_collection.png"

function RowMarvel() {
  return (
    <div className="imageContainer">
      <img src={c_image} alt="collection" className="logo_image" />
      <img src={image} alt="Marvel" className="image" />
    </div>
  )
}

export default RowMarvel
