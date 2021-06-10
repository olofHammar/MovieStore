import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import * as FaIcons from "react-icons/fa"
import "../styles/cart.css"
import { db } from "../firebase"

export default function DeleteAlert({ userId, id }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteItem = () => {
    const ref = db.collection("users").doc(userId)
    ref.collection("cartItems").doc(id).delete()
    setOpen(false)
  }

  return (
    <div>
      <FaIcons.FaTrash
        className="cartItemDeleteIcon"
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            background: "rgb(25, 25, 31)",
            border: "1px solid black",
            borderRadius: "4px",
            color: "white",
            letterSpacing: "1.43px",
            fontWeight: "900",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Delete movie?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this movie from your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" id="btnDeleteAlert">
            NO
          </Button>
          <Button
            onClick={() => {
              deleteItem()
            }}
            color="primary"
            id="btnDeleteAlert"
          >
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
