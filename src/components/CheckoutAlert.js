import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import * as FaIcons from "react-icons/fa"
import { makeStyles } from "@material-ui/core/styles"
import { db } from "../firebase"
import { useSelector } from "react-redux"
import { getUserId } from "../features/userSlice"
import uuid from "react-uuid"
import "../styles/cart.css"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      display: "flex",
      width: "31.6ch",
      marginLeft: "0",
      background: "white",
      textAlign: "center",
      borderRadius: "4px",
      ["@media (max-width:768px)"]: {
        margin: theme.spacing(0.2),
        width: "95%",
        height: "100%",
        maxHeight: "15%",
        fontSize: "12px",
        border: "none",
        multiline: "false",
      },
    },
  },
}))

export default function CheckoutAlert({ cartItems }) {
  const userId = useSelector(getUserId)
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("")
  const [street, setStreet] = React.useState("")
  const [zip, setZip] = React.useState("")
  const [city, setCity] = React.useState("")
  const [orderSent, setOrderSent] = React.useState(false)

  const handleClickOpen = () => {
    if (cartItems.length === 0) return
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setTimeout(function () {
      setOrderSent(false)
      setName("")
      setStreet("")
      setZip("")
      setCity("")
    }, 1000)
  }

  const clearCart = () => {
    if (userId === null) return

    let tempReceipt = ""
    let totalPrice = 0
    const timeStamp = Date.now()
    const receiptId = uuid()

    const ref = db.collection("users").doc(userId)
    ref
      .collection("cartItems")
      .get()
      .then((doc) => {
        doc.forEach((element) => {
          let price = element.data().quantity * element.data().price
          tempReceipt = `${element.data().quantity} ${element.data().title}, $${
            Math.round(price * 100) / 100
          }...${tempReceipt}`
          totalPrice += price
          element.ref.delete()
        })
        console.log(tempReceipt)
        ref
          .collection("receipts")
          .doc(receiptId)
          .set({
            orderInfo: tempReceipt,
            totalPrice: totalPrice,
            adress: `${street}, ${city}`,
            user: name,
            date: timeStamp,
          })
      })
  }

  const handleOrder = () => {
    //console.log(`${street} ${zip} ${city}`)
    if (
      name.length < 1 ||
      street.length < 5 ||
      zip.length < 5 ||
      city.length < 3
    ) {
      let errorMsg = document.getElementById("checkOutErrorMsg")
      if (name.length < 1) {
        errorMsg.innerHTML = "Add a name."
      } else if (street.length < 5) {
        errorMsg.innerHTML = "Enter a valid street name."
      } else if (zip.length < 5) {
        errorMsg.innerHTML = "Enter a valid postal code."
      } else if (city.length < 3) {
        errorMsg.innerHTML = "Enter a valid city."
      }

      setTimeout(function () {
        errorMsg.innerHTML = ""
      }, 2000)

      return
    }
    setOrderSent(true)
    clearCart()
  }

  return (
    <div className="checkOutAlertContainer">
      <Button variant="outlined" onClick={handleClickOpen} id="btnCartCheckOut">
        CHECK OUT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            minHeight: "60%",
            minWidth: "30%",
            maxWidth: "100%",
            justifyContent: "flex-start",
            background: "#15171c",
            border: "1px solid black",
            borderRadius: "4px",
            color: "white",
            letterSpacing: "1.43px",
            fontWeight: "900",
            padding: "20px",
          },
        }}
        id="checkOutDailogPaper"
      >
        <>
          {!orderSent ? (
            <>
              <DialogTitle id="form-dialog-title">
                Shipment Information
              </DialogTitle>
              <DialogContent>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    autoFocus
                    margin="dense"
                    id="alert-street"
                    type="text"
                    variant="outlined"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="alert-street"
                    placeholder="Street"
                    type="text"
                    variant="outlined"
                    onChange={(e) => setStreet(e.target.value)}
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="alert-zip"
                    placeholder="Postal Code"
                    type="text"
                    variant="outlined"
                    onChange={(e) => setZip(e.target.value)}
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="alert-city"
                    placeholder="City"
                    type="text"
                    variant="outlined"
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                  />
                </form>
              </DialogContent>
              <p id="checkOutErrorMsg"></p>
              <DialogActions id="checkOutAlertBtns">
                <Button
                  onClick={handleClose}
                  color="primary"
                  id="btn-cancel-order"
                >
                  Cancel
                </Button>
                <Button onClick={handleOrder} color="primary" id="btn-order">
                  Order
                </Button>
              </DialogActions>
            </>
          ) : (
            <>
              <FaIcons.FaShippingFast className="shippingIcon" />
              <DialogTitle id="form-dialog-title">
                Your order has been placed.
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="form-dialog-content">
                  {`Your order will be delivered to ${street} within 3-5 days.`}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  color="primary"
                  id="btn-cancel-order"
                >
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </>
      </Dialog>
    </div>
  )
}
