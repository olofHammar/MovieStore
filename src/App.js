import React from 'react';
import './App.css';
import { db } from './firebase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Support from './components/Support'
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar'



function App() {

  const name = useSelector(state => state.profile.name);

  return (

   <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cart" exact component={Cart}/>
      <Route path="/support" exact component={Support}/>
    </Switch>
    
   </Router>
  );
}

export default App;
