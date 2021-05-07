import React from 'react';
import './App.css';
import { db } from './firebase';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';

function App() {

  const name = useSelector(state => state.reduxTest.name);

  return (
    <div>
      Välkommen {name}!
      <Profile/>
    </div>
  );
}

export default App;
