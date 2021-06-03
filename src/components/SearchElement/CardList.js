import React, { useState } from "react"
import Card from "./Card"

function CardList({ results,  }) {

  const [exists, setExists] = useState(false);
  let data = []

  if (results.data) {
    data = results.data.Search || []
  }

  function checkImage(image) {
    setExists(false);

    image.onload = function() {
      setExists(true);
    }
    image.onerror = function() {
     setExists(false);
    }
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