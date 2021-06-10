import React, { useState, useEffect } from "react"
import "../styles/myList.css"
import api from "../api"
import ContentModal from "../modals/ContentModal"
import { useSelector } from "react-redux"
import { getUserId } from "../features/userSlice"

function MyList({ myList }) {
  const [movies, setMovies] = useState([])
  const userId = useSelector(getUserId)
  const key = "My List"

  useEffect(() => {
    let fetchMovies = Promise.all(
      [...myList].map(async (m) => {
        try {
          let response = await api.get(m.data.url)
          return response.data
        } catch (error) {
          return
        }
      })
    )

    fetchMovies.then((data) => setMovies(data))
  }, [myList])

  return (
    <div className="myListContainer">
      {userId ? (
        <>
          <div className="titleContainer">
            <h4>My List</h4>
          </div>
          <div className="moviesContainer">
            {movies.map((movie, i) => (
              <div className="row_myList" key={i}>
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
                  price={19.99}
                  mylist={key}
                >
                  <img
                    className="movie_poster"
                    src={movie.Poster}
                    key={movie.imdbID}
                    alt="MoviePoster"
                  />
                </ContentModal>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="signInContainer">
          <h4>Sign in to access this feature</h4>
        </div>
      )}
    </div>
  )
}

export default MyList
