import React, { useState, useEffect } from 'react';
import api from '../api';
import ContentModal from '../modals/ContentModal';
import '../styles/collections.css';
import { useParams } from 'react-router-dom';
import movieLists from '../movieLists';
import spiderman from '../img/collection_spiderman.png';
import marvel from '../img/collection_avengers.jpeg';
import ring from '../img/collection_ring_new.jpg';
import band from '../img/collection_band.jpeg';
import comedy from '../img/collection_comedy.jpeg';
import pulp from '../img/collection_pulp.jpeg';
import street from '../img/collection_police.jpeg';

function Collections() {

    const [collectionImage, setCollectionImage] = useState('');
    const [collectionImageBack, setCollectionImageBack] = useState('');
    const [collectionTitle, setCollectionTitle] = useState('');
    const [collectionCategory, setCollectionCategory] = useState([]);
    const [movies, setMovies] = useState([]);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (sorted) return;

        if (title === 'marvel') {
            setCollectionTitle('Marvel Movies');
            setCollectionImageBack(marvel);
            setCollectionImage(spiderman);
            setCollectionCategory(movieLists.marvel);
        } else if (title == 'jackson') {
            setCollectionTitle('Peter Jackson Movies');
            setCollectionImageBack(ring);
            setCollectionCategory(movieLists.peterJackson)
        } else if (title === 'musicals') {
            setCollectionTitle('Musical Movies');
            setCollectionImageBack(band);
            setCollectionCategory(movieLists.musicals);
        } else if (title === 'stand_up') {
            setCollectionTitle('Stand Up Specials');
            setCollectionImageBack(comedy);
            setCollectionCategory(movieLists.standUp);
        } else if (title === 'tarantino') {
            setCollectionTitle('Quentin Tarantino Movies');
            setCollectionImageBack(pulp);
            setCollectionCategory(movieLists.quentin);
        } else if (title === 'mystery') {
            setCollectionTitle('Mystery Movies');
            setCollectionImageBack(street);
            setCollectionCategory(movieLists.mystery);
        }

        let fetchMovies = Promise.all([...collectionCategory].map(async m =>{
            try {
              let response = await api.get(m);
              return response.data;
            }
            catch(error) {
              return ;
            }
        }));     

        fetchMovies.then(data=> setMovies(data));
    }, [movies]);

    const sortByPopularity = () => {
        setSorted(true);
        setMovies([...movies].sort((a, b) => b.imdbRating - a.imdbRating));
    };

    function sortByTitle() {
        setSorted(true);
        setMovies([...movies].sort((a, b) => a.Title.localeCompare(b.Title)));
    };

    function sortByYear() {
        setSorted(true);
        setMovies([...movies].sort((a, b) => b.Year - a.Year));
    }

    const { title } = useParams();

    return (
        <div className="collectionsContainer">
            <img src={ collectionImageBack } alt="" className="collectionBackground"/>
            <div className="collectionsTopContainer">
                <div className="collectionsTextContainer">
                    <h1>{ collectionTitle }</h1>
                    <div className="collectionsSortContainer">
                        <h4 className="collectionsBtn" onClick={() => {sortByPopularity()}}>
                            <span>POPULARITY</span></h4>
                        <h4 className="collectionsBtn" onClick={sortByTitle}>
                            <span>TITLE</span></h4>
                        <h4 className="collectionsBtn" onClick={sortByYear}>
                            <span>YEAR</span></h4>
                    </div>
                </div>
                <div className="collectionsImageContainer">
                    <img src={ collectionImage } alt="" className="collectionsImage"/>
                </div>
            </div>

                <div className="collectionMoviesContainer">
                {movies.map( movie => (
                   <div className="collectionsRowMovie" key={movie.imdbId}>
                   <ContentModal
                    id={movie.imdbID}
                    title={movie.Title}
                    poster={movie.Poster}
                    plot={movie.Plot}
                    cast={movie.Actors}
                    director={movie.Director}
                    genre={movie.Genre}
                    rated={movie.Rated}
                    year={movie.Year}
                    imdbRating={movie.imdbRating}
                    price={19.99}
                   >
                   <img className="collectionsMoviePoster" src={movie.Poster} key={movie.imdbID} />
                   </ContentModal>
                </div>
            ))}
                </div>
            
        </div>
    )
}

export default Collections
