import React from "react"
import ContentModal from "../ContentModal"
import Card from "./Card"

function CardList({ results }) {
  let data = []
  if (results.data) {
    data = results.data.Search || []
  }

  return (
    <div className="rowResult">
      {data.map((movie) => (
          <Card movie={movie} />
      ))}
    </div>
  )
}

export default CardList;