import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop } from '@material-ui/core';
import '../styles/reviewModal.css';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    margin: 0,
    padding: 0,
  },
  paper: {
    
  },
}));

export default function ReviewModal({ children }) {
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
        <div className={classes.paper} className="reviewBodyContainer">
            <h1>This is review modal</h1>
            <button className="btnReviewClose" onClick={handleClose}>X</button>
        </div>
        </Slide>
      </Modal>
    </>
  );
}
