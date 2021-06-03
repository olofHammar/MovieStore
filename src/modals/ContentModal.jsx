import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop } from '@material-ui/core';
import '../styles/contentModal.css';
import imdb_logo from '../img/imdb_logo.png';
import mn_logo from '../img/m_logo.png'
import Slide from '@material-ui/core/Slide';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { getUserId } from '../features/userSlice';
import LoginModal from './LoginModal';
import TrailerModal from '../modals/TrailerModal';
import ReviewModal from '../modals/ReviewModal';
import check from '../img/v_white.png';
import plus from '../img/add_white.png';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: "flex",
    width: "80%",
    height: "90%",
    position: "absolute", 
    overflowY: "scroll",   
    bottom: 0,
    right: 0,
    color: "white",
    backgroundImage: "linear-gradient(0deg, rgb(11, 11, 17) 0%, #101010 100%)",
    borderTopLeftRadius: "25px",
    borderTop: "1px solid #303030",
    borderLeft: "1px solid #303030",
    borderRadius: 0,
    boxShadow: theme.shadows[5],
  },
}));

export default function ContentModal({ children, id, title, poster, plot, cast, director, genre, rated, 
 year, imdbRating, price, mylist }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [myList, setMyList] = useState(false);
  const userId = useSelector(getUserId);
  const [mnRating, setMnRating] = useState('-');
  const [maxGenre, setMaxGenre] = useState('');

  const handleOpen = () => {
    setOpen(true);
    handleRating();
    handleGenre();
    //console.log(genre);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (userId === null) { return }
    let movie = db.collection('users').doc(userId).collection('myList').doc(id)
    movie.get()
    .then((doc) => {
      if(doc.exists) {
        setMyList(true);
      } else {
        setMyList(false);
      }
    })

  }, [open]);

  const handleGenre = () => {
    var genreArray = genre.split(',');
    if (genreArray[1] === undefined ) {
      setMaxGenre(`${genreArray[0]}`);
    } else {
      setMaxGenre(`${genreArray[0]}, ${genreArray[1]}`);
    }
  }

  const handleRating = () => {

    let tempRating = 0;
    let count = 0;
    db.collection('movies').doc(id).collection('reviews').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => (
        tempRating += doc.data().rating,
        count += 1
      ))
      tempRating = (tempRating/count);
      let rating = Math.round(tempRating * 10) / 10
      if (!rating) {
        setMnRating('-');
      } else {
        setMnRating(rating);
      }
    })
  }

  const handleMyList = () => {
    if (userId === null) { return }
    setMyList(!myList);
    if(!myList) {
      let movie = db.collection('users').doc(userId).collection('myList').doc(id)
      movie.set({
        id: id,
        url: `http://www.omdbapi.com/?i=${id}&plot=full&apikey=38795606`
      })
    } else {
      if (userId === null) { return }
      let movie = db.collection('users').doc(userId).collection('myList').doc(id)
      movie.delete()
      console.log(mylist);
      console.log(title)
      if(mylist === "My List") {
        handleClose();
      }      
    }
  }

  const addToCart = () => {
    const cartItem = db.collection('users').doc(userId).collection('cartItems').doc(id)
    cartItem.get()
    .then((doc)=> {
        if(doc.exists) {
            cartItem.update({
                quantity: doc.data().quantity + 1
                
            })
            let btn = document.getElementById("btnCartAdd")
            btn.innerText = "item added!";
            setTimeout(function() {
                btn.innerText = "Add to cart"
            }, 1000);
            
        } else {
                cartItem.set({
                    id: id,
                    title: title,
                    poster: poster,
                    price: price, 
                    quantity: 1
                })
                let btn = document.getElementById("btnCartAdd")
                btn.innerText = "item added!";
                setTimeout(function() {
                    btn.innerText = "Add to cart"
                }, 1000);
            }
        })
    }

  return (
    <>
    <div 
    className="row"
    style={{cursor: "pointer"}}
    color="inherit"
    onClick={handleOpen}
    >
        { children }
    </div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide in={open} transition={Slide} direction='up' timeout={500}>
          <div className={classes.paper} id="modalContainer">
            <div className="movieContainer">
            <img src={poster} alt="poster" className="modalImage"/>
            <div className="infoContainer">
            <h2 id="transition-modal-title" className="movieTitle">{title}</h2>
            <div className="movieRatings">
                <h5>{maxGenre}</h5>
                <h5>{year}</h5> 
                <img src={ imdb_logo } alt="imdb" className="imdbLogo"/>
                <h5>{ `${ imdbRating }` }</h5>
                <img src={ mn_logo } alt="imdb" className="mnLogo"/>
                <h5> { `${ mnRating }` }</h5>
                <h5 id="ageRating">Rated: {rated}</h5>
            </div>
            <div className="movieCastCrew">
                <h4><span>Director:</span> {director}</h4> 
                <h4><span>Cast:</span> {cast}</h4>
            </div>
            <h5 id="transition-modal-description" className="moviePlot">{plot}...</h5>
            <div className="bottomRow">
              <div className="leftSide">
                {
                  !userId ? (
                    <div className="buttonsContainer">
                      <LoginModal>
                      <button className="btnModalCart">
                          <div id="btnCartAdd">Add to cart</div> 
                          <div id="btnCartPrice">${price}</div></button>
                          </LoginModal>

                      <TrailerModal videoId={title}>
                      <button className="btnModalTrailerLogin">Trailer</button>
                      </TrailerModal>

                      <ReviewModal id={ id }>
                      <button className="btnModalTrailerLogin">Reviews</button>
                      </ReviewModal>
                    </div>
                  ) : (
                    <div className="buttonsContainerUser">
                    <button className="btnModalCart" onClick={addToCart}>
                        <div id="btnCartAdd">Add to cart</div> 
                        <div id="btnCartPrice">${price}</div></button>

                    <TrailerModal videoId={title}>
                      <button className="btnModalTrailer">Trailer</button>
                    </TrailerModal>

                    <ReviewModal id={id} handleRating={handleRating}>
                      <button className="btnModalTrailer">Reviews</button>
                    </ReviewModal>

                    </div>
                  )
                }
              </div>
              {
                userId ? (
                  <div className="rightSide">
                  {
                    myList ? (
                      <span className="spanCheck"><img src={ check } id="checkIcon" onClick={handleMyList}/></span>
                    ) : (
                        <span className="spanPlus"><img src={ plus } id="plusIcon" onClick={handleMyList}/></span>
                    )
                  }
                </div>
                ) : (
                  <>
                  </>
                )

              }
            </div>
          </div>
        <button className="btnModalClose" onClick={handleClose}>X</button>
      </div>
    </div>
        </Slide>
      </Modal>
    </>
  );
}
