import React from "react"
import ContentModal from "../ContentModal"
import Card from "./Card"

function CardList({ results }) {
  let data = []
  if (results.data) {
    data = results.data.Search || []
  }

  return (
    <div className="result">
      {data.map((movie) => (
        <ContentModal
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          plot={movie.Plot}
          cast={movie.Actors}
          director={movie.Director}
          genre={movie.Genre}
          rated={movie.Rated}
          metascore={movie.Metascore}
          year={movie.Year}
          imdbRating={movie.imdbRating}
          price={19.99}
        >
          <Card movie={movie} />
        </ContentModal>
      ))}
    </div>
  )
}

export default CardList;