import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop } from '@material-ui/core';
import '../styles/contentModal.css';
import imdb_logo from '../img/imdb_logo.png';
import Slide from '@material-ui/core/Slide';

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
    backgroundImage: "linear-gradient(0deg, #050505 0%, #101010 100%)",
    borderTopLeftRadius: "25px",
    borderTop: "1px solid #303030",
    borderLeft: "1px solid #303030",
    borderRadius: 0,
    boxShadow: theme.shadows[5],
  },
}));

export default function ContentModal({ children, id, title, poster, plot, cast, director, genre, rated, 
metascore, year, imdbRating, price }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <h5>{genre}</h5>
                <h5>{year}</h5> 
                <img src={ imdb_logo } alt="imdb" className="imdbLogo"/>
                <h5>{imdbRating}</h5>
                <h5>Rated: {rated}</h5>
            </div>
            <div className="movieCastCrew">
                <h4><span>Director:</span> {director}</h4> 
                <h4><span>Cast:</span> {cast}</h4>
            </div>
            <h5 id="transition-modal-description" className="moviePlot">{plot}...</h5>
            <div className="bottomRow">
            <button className="btnModalCart">Add to cart <span>${price}</span></button>
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
