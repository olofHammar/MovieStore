import React, { useState } from "react"
import Rating from "@material-ui/lab/Rating"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import { db } from "../firebase"
import uuid from "react-uuid"
import "../styles/reviewModal.css"
import { useSelector } from "react-redux"
import { getUserEmail, getUserId } from "../features/userSlice"
import TextField from "@material-ui/core/TextField"
import LoginModal from "../modals/LoginModal"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "31.6ch",
      background: "white",
      textAlign: "start",
      borderRadius: "4px",
      ["@media (max-width:768px)"]: {
        margin: theme.spacing(0.2),
        width: "37.5ch",
        height: "10%",
        maxHeight: "15%",
        fontSize: "12px",
        border: "none",
        multiline: "false",
      },
    },
  },
}))

export default function StarRating({ id }) {
  const [value, setValue] = useState(0)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const userEmail = useSelector(getUserEmail)
  const userId = useSelector(getUserId)
  const classes = useStyles()

  function handleReview() {
    //console.log(content.length)
    if (title.length < 1 || content.length < 5 || value === 0) {
      let errorP = document.getElementById("errorMsg")
      if (title.length < 1) {
        errorP.innerHTML = "Please add a title."
      } else if (content.length < 5) {
        errorP.innerHTML = "Review must be minimum five characters."
      } else if (value === 0) {
        errorP.innerHTML = "Please give your review a star rating."
      }

      setTimeout(function () {
        errorP.innerHTML = ""
      }, 2000)
      return
    }

    const timeStamp = Date.now()
    const reviewId = uuid()

    const ref = db
      .collection("movies")
      .doc(id)
      .collection("reviews")
      .doc(reviewId)
    ref.set({
      rating: value,
      title: title,
      content: content,
      user: userEmail,
      date: timeStamp,
    })

    setValue(0)
    setTitle("")
    setContent("")
  }

  return (
    <div className="starRatingsContainer">
      <form className={classes.root} noValidate autoComplete="off">
        <h3 className="writeReviewTitle">Write a Review</h3>

        <Rating
          className="starsContainer"
          name="unique-rating"
          value={value}
          max={10}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />

        <TextField
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="textFieldTitle"
          placeholder="Title"
          variant="outlined"
        />

        <TextField
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="textFieldContent"
          placeholder="Text"
          rows={6}
          multiline
          variant="outlined"
        />
      </form>
      {userId ? (
        <button className="btnAddReview" onClick={handleReview}>
          ADD REVIEW
        </button>
      ) : (
        <LoginModal>
          <button className="btnAddReviewLogin">ADD REVIEW</button>
        </LoginModal>
      )}
      <p id="errorMsg"></p>
    </div>
  )
}
