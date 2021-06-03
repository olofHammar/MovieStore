import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop } from '@material-ui/core';
import { db } from '../firebase';
import '../styles/reviewModal.css';
import Slide from '@material-ui/core/Slide';
import StarRating from '../components/StarRating';
import * as FaIcons from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    margin: 0,
    padding: 0,
  },
  paper: {
    
  },
}));

export default function ReviewModal({ children, id, handleRating }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  const handleOpen = () => {
    setOpen(true);  
  };

  const handleClose = () => {
    setOpen(false);
    handleRating();
  };

  const getReviews = () => {
    //console.log('started fetch');
    const ref = db.collection('movies').doc(id).collection('reviews')
    ref.onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        review: doc.data()
      })
      )
      let sortedByDate = tempItems.sort((a, b) => b.review.date - a.review.date)
      setReviews(sortedByDate);
    })
  }

  const scrollUp = (e) => {
    e.preventDefault()

    let container = document.getElementById("ic")
    let containerScrollPosition = document.getElementById("ic").scrollTop
    console.log(containerScrollPosition);
    container.scrollTo({
        top: containerScrollPosition - 300,
        behavior: 'smooth'
    })
  }

  const scrollDown = (e) => {
    e.preventDefault()

    let container = document.getElementById("ic")
    let containerScrollPosition = document.getElementById("ic").scrollTop
    console.log(containerScrollPosition);
    container.scrollTo({
        top: containerScrollPosition + 300,
        behavior: 'smooth'
    })
  }

  useEffect(() => {
    getReviews();
  }, [setOpen]);


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
        <div className={classes.paper} className="reviewBodyContainer">
            <div className="inputContainer">
              <StarRating id={ id } />
            </div>
            <div className="reviewsContainer" id="ic">
              <h1 className="reviewsContainerTitle">User Reviews</h1>
              {
                reviews.map(r => (
                  <div className="reviewContainer">
                    <div className="topRow">
                      <h2>{r.review.title}</h2>
                      <p>⭐</p>
                      <h4 className="numberRating">{`${r.review.rating}/10`}</h4>
                    </div>
                    <div className="secondRow">
                      <p>{new Intl.DateTimeFormat('en-US', 
                      {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'})
                      .format(r.review.date)}</p>
                      <p>{`posted by: ${r.review.user}`}</p>
                    </div>
                    <div className="contentContainer">
                      <p>{r.review.content}</p>
                    </div>
                  </div>
                ))
              }
              <FaIcons.FaArrowUp onClick={scrollUp} id="btnScrollUp" />
              <FaIcons.FaArrowDown onClick={scrollDown} id="btnScrollDown"/>
            </div>
            <button className="btnReviewClose" onClick={handleClose}>X</button>
        </div>
        </Slide>
      </Modal>
    </>
  );
}
