import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as FaIcons from 'react-icons/fa';
import '../styles/cart.css';
import { db } from '../firebase';

export default function DeleteAlert({ userId, id }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = () => {
    const ref = db.collection('users').doc(userId)
    ref.collection('cartItems').doc(id).delete();
    setOpen(false);
}

  return (
    <div>
      <FaIcons.FaTrash className="cartItemDeleteIcon" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete movie?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item from your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            NO
          </Button>
          <Button onClick={() => {deleteItem()}} color="primary" autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}