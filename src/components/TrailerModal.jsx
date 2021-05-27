import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop } from '@material-ui/core';
import '../styles/trailer.css';
import Slide from '@material-ui/core/Slide';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    margin: 0,
    padding: 0,
  },
  paper: {
    
  },
}));

export default function TrailerModal({ children, videoId }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleOpen = () => {
         setOpen(true);    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const opts = {
    height: "400px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  useEffect(() => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(videoId || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));

      }).catch((error) => console.log(error));
    }
  }, []);


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
        <div className={classes.paper} className="trailerBodyContainer">
            <h1 className="trailerTitle">{videoId}</h1>
            <div className="videoContainer">
              <YouTube videoId={ trailerUrl } opts={ opts }/>
            </div>
            <button className="btnTrailerClose" onClick={handleClose}>X</button>
        </div>
        </Slide>
      </Modal>
    </>
  );
}
