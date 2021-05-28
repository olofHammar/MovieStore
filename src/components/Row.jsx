import React, { useState, useEffect } from 'react';
import api from '../api';
import '../styles/row.css';
import ContentModal from './ContentModal';

function Row({ title, category, rowId, id }) {
    const [movies, setMovies] = useState([]);
    const [showLeft, setShowLeft] = useState(false)
    let left = '<';
    let right = '>';

    useEffect(() => {
        let fetchMovies = Promise.all([...category].map(async m =>{
            try {
              let response = await api.get(m);
              return response.data;
            }
            catch(error) {
              return ;
            }
            }));     
            fetchMovies.then(data=> setMovies(data));
            console.log(movies);
    }, []);

    const scrollRight = (e) => {
        setShowLeft(true);
        e.preventDefault()
        if (title === "Top Movies") {
        let container = document.getElementById("topMovies")
        let containerScrollPosition = document.getElementById("topMovies").scrollLeft
        container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
        })
        } else if (title === "Action & Adventure Movies") {
            let container = document.getElementById("actionMovies")
            let containerScrollPosition = document.getElementById("actionMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            }) 
        } else if (title === "Comedy Movies") {
            let container = document.getElementById("comedyMovies")
            let containerScrollPosition = document.getElementById("comedyMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            })
        } else if (title === "Documentaries") {
            let container = document.getElementById("documentary")
            let containerScrollPosition = document.getElementById("documentary").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            })
        } else if (title === "Animated Movies") {
            let container = document.getElementById("animatedMovies")
            let containerScrollPosition = document.getElementById("animatedMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            })
        } else if (title === "Drama Movies") {
            let container = document.getElementById("dramaMovies")
            let containerScrollPosition = document.getElementById("dramaMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            })

        } else if (title === "Top Family Movies") {
            let container = document.getElementById("topfamilyMovies")
            let containerScrollPosition = document.getElementById("topfamilyMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            })  
        } else if (title === "Adventures Movies") {
            let container = document.getElementById("adventuresMovies")
            let containerScrollPosition = document.getElementById("adventuresMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            })  
        } else if (title === "Family Movies") {
            let container = document.getElementById("familyMovies")
            let containerScrollPosition = document.getElementById("familyMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            })
        } else if (title === "New Family Movies") {
            let container = document.getElementById("newFamilyMovies")
            let containerScrollPosition = document.getElementById("newFamilyMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            })  
        } else if (title === "Horror Movies") {
            let container = document.getElementById("horrorMovies")
            let containerScrollPosition = document.getElementById("horrorMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition + 700,
            behavior: 'smooth'
            })
        }
        
        
    }

    const scrollLeft = (e) => {
        e.preventDefault()
        if (title === "Top Movies") {
            let container = document.getElementById("topMovies")
            let containerScrollPosition = document.getElementById("topMovies").scrollLeft
        
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })
        }  else if (title === "Action & Adventure Movies") {
            let container = document.getElementById("actionMovies")
            let containerScrollPosition = document.getElementById("actionMovies").scrollLeft
            console.log(container.scrollLeft)
        
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })
        } else if (title === "Comedy Movies") {
            let container = document.getElementById("comedyMovies")
            let containerScrollPosition = document.getElementById("actionMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })
        } else if (title === "Documentaries") {
            let container = document.getElementById("documentary")
            let containerScrollPosition = document.getElementById("actionMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })
        } else if (title === "Animated Movies") {
            let container = document.getElementById("animatedMovies")
            let containerScrollPosition = document.getElementById("animatedMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })
        } else if (title === "Drama Movies") {
            let container = document.getElementById("dramaMovies")
            let containerScrollPosition = document.getElementById("dramaMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })
        } else if (title === "Top Family Movies") {
            let container = document.getElementById("topfamilyMovies")
            let containerScrollPosition = document.getElementById("topfamilyMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })
        }else if (title === "Adventures Movies") {
                let container = document.getElementById("adventuresMovies")
                let containerScrollPosition = document.getElementById("adventuresMovies").scrollLeft
                console.log(containerScrollPosition)
                container.scrollTo({
                left: containerScrollPosition - 700,
                behavior: 'smooth'
                })     
        } else if (title === "Family Movies") {
            let container = document.getElementById("familyMovies")
            let containerScrollPosition = document.getElementById("familyMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })   
        } else if (title === "New Family Movies") {
            let container = document.getElementById("newFamilyMovies")
            let containerScrollPosition = document.getElementById("newFamilyMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })   
        } else if (title === "Horror Movies") {
            let container = document.getElementById("horrorMovies")
            let containerScrollPosition = document.getElementById("horrorMovies").scrollLeft
            console.log(containerScrollPosition)
            container.scrollTo({
            left: containerScrollPosition - 700,
            behavior: 'smooth'
            })
        }
    }

    return (
        <div className="row">
              <h1>{title}</h1>
              <div className="buttonContainer" >
                <button style={{ display: showLeft ? "block" : "none" }} onClick={scrollLeft} className={rowId + " left-arrow"}>{left}</button>
                <button onClick={scrollRight} className={rowId + " right-arrow"}>{right}</button>
            </div>
              <div className="row_movies" id={id}>
               {movies.map( movie => (
                   <div className="row_movie" key={movie.imdbId}>
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
        </div>
    )
}

export default Row
