import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './features/rootReducer';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCF7ouWfvqrIq2g9h3QLmQ53EaC3V-TMU0",
  authDomain: "moviestore-e1884.firebaseapp.com",
  projectId: "moviestore-e1884",
  storageBucket: "moviestore-e1884.appspot.com",
  messagingSenderId: "447767572235",
  appId: "1:447767572235:web:8f2cdcfc42eeba1442bc0e",
  measurementId: "G-BWYQ9SNFSL"
};

firebase.initializeApp(config);

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);