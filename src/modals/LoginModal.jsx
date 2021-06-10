import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import { Backdrop } from "@material-ui/core"
import "../styles/login.css"
import Slide from "@material-ui/core/Slide"
import { auth } from "../firebase"
import { useDispatch, useSelector } from "react-redux"
import image from "../img/m_logo.png"
import { setCurrentUser, getUserId, getUserEmail } from "../features/userSlice"

const useStyles = makeStyles((theme) => ({
  modal: {
    margin: 0,
    padding: 0,
  },
  paper: {},
}))

export default function LoginModal({ children }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setemailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [hasAccount, setHasAccount] = useState(false)
  const userId = useSelector(getUserId)
  const userEmail = useSelector(getUserEmail)
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    clearInputs()
  }

  const clearInputs = () => {
    setEmail("")
    setPassword("")
  }

  const clearErrors = () => {
    setPasswordError("")
    setPasswordError("")
  }

  const handleLogin = () => {
    clearErrors()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch(
          setCurrentUser({
            userId: result.user.uid,
            userEmail: result.user.email,
          })
        )
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setemailError(err.message)
            setTimeout(function () {
              setemailError("")
            }, 2000)
            break
          case "auth/wrong-password":
            setPasswordError(err.message)
            setTimeout(function () {
              setPasswordError("")
            }, 2000)
            break
        }
      })
  }

  const handleSignup = () => {
    clearErrors()

    auth
      .createUserWithEmailAndPassword(email, password)

      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setemailError(err.message)
            setTimeout(function () {
              setemailError("")
            }, 2000)
            break
          case "auth/weak-password":
            setPasswordError(err.message)
            setTimeout(function () {
              setPasswordError("")
            }, 2000)
            break
        }
      })
  }

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        dispatch(
          setCurrentUser({
            userId: user.uid,
            userEmail: user.email,
          })
        )
        //console.log( userId + userEmail )
      } else {
        console.log("no user")
      }
    })
  }

  useEffect(() => {
    authListener((user) => {
      if (user) {
        setOpen(false)
      }
    })
  }, [])

  return (
    <>
      <div
        className="row"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
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
        <Slide in={open} transition={Slide} direction="up" timeout={500}>
          <div className={classes.paper} className="bodyContainer">
            <div className="leftContainer">
              <img src={image} alt="image" className="logoImage" />
            </div>

            <div className="rightContainer">
              <div className="inputContainer">
                <h3 className="userName">E-mail</h3>
                <input
                  className="unserNameInput"
                  type="text"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h3>Password</h3>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="bottomContainer">
                {hasAccount ? (
                  <>
                    <button className="btnLogin" onClick={handleSignup}>
                      Sign up
                    </button>
                    <p className="loginP">
                      Have an account ?{" "}
                      <span
                        className="loginSpan"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        Sign in
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <button className="btnLogin" onClick={handleLogin}>
                      Sign in
                    </button>
                    <p className="loginP">
                      Do not have a account ?{" "}
                      <span
                        className="loginSpan"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        Sign up
                      </span>
                    </p>
                  </>
                )}

                <div className="errorMsgContainer">
                  <p className="errorMsg">{passwordError}</p>
                  <p className="errorMsg">{emailError}</p>
                </div>
              </div>
            </div>
            <button className="btnLoginClose" onClick={handleClose}>
              X
            </button>
          </div>
        </Slide>
      </Modal>
    </>
  )
}
