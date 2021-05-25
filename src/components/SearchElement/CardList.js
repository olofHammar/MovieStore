import React from "react";
import ContentModal from "../LoginModal";
import Card from "./Card";

function CardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  console.log(data);
  return (
    <div className="result">
      {data.map((movie) => (
        <ContentModal
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
          price={19.99}>

<img className="movie_poster" src={movie.Poster} key={movie.imdbID} />

          <Card key={movie.imdbID} movie={movie} />

        </ContentModal>
      ))}
    </div>
  );
}

export default CardList;