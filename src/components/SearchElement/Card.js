import React from "react";

export default function Card({ movie }) {
  
  return (
    <div class="resultCard">
      <figure className="homeContainer">
        <img
          src={movie.Poster}
          alt= {movie.Title}
        />
      </figure>
      <h4 class="bolder">{movie.Title}</h4>
      <span><b>Year:</b>{movie.Year}</span>
    </div>
  );
}