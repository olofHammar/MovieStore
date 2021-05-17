import React, { useState, useEffect } from 'react';
import api from '../api';
import styles from '../styles/row.css';

function Row({ title, keyWord }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await api.get(keyWord)
            setMovies(request.data.Search);
            console.log(movies);

            return request;
        }
        fetchData();
    }, [movies]);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_movies" >
            {movies.map( movie => (
                <div className="row_movie">
                <img className="movie_poster" src={movie.Poster} />
                <h2>{movie.Title}</h2>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Row
