import React, { useState, useEffect } from 'react'
import '../styles/myList.css';
import api from '../api';
import ContentModal from '../components/ContentModal';
import { useSelector } from 'react-redux';
import { getUserId } from '../features/userSlice';


function MyList( { myList }) {

const [movies, setMovies] = useState([]);
const userId = useSelector(getUserId);

useEffect(() => {
  let fetchMovies = Promise.all([...myList].map(async m =>{
    try {
      let response = await api.get(m.data.url);
      return response.data;
    }
    catch(error) {
      return ;
    }
  }));     
  fetchMovies.then(data=> setMovies(data));
}, [movies]);
 


    return (
        <div className="myListContainer">
          {
            userId ? (
              <>
              <div className="titleContainer">
              <h4>My List</h4>
              </div>
              <div className="moviesContainer">
               {movies.map( movie => (
                     <div className="row_myList" key={movie.imdbId}>
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
                     >
                     <img className="movie_poster" src={movie.Poster} key={movie.imdbID} />
                     </ContentModal>
                 </div>
             ))}
             </div>
             </>
            ) : (
              <div className="titleContainer">
              <h4>Sign in to use access this feature</h4>
              </div>
            )
          }

        </div>
    )
}

export default MyList
