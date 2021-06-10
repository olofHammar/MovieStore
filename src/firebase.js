import firebase from "firebase"

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCF7ouWfvqrIq2g9h3QLmQ53EaC3V-TMU0",
  authDomain: "moviestore-e1884.firebaseapp.com",
  projectId: "moviestore-e1884",
  storageBucket: "moviestore-e1884.appspot.com",
  messagingSenderId: "447767572235",
  appId: "1:447767572235:web:8f2cdcfc42eeba1442bc0e",
  measurementId: "G-BWYQ9SNFSL",
})

const db = firebase.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
