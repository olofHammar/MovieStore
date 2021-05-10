import React from 'react';
import './App.css';
import { db } from './firebase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';

function App() {

  const name = useSelector(state => state.profile.name);

  return (

   <Router>

     <Header/>

     <Switch>

       <Route path="/cart">
         <Cart/>
       </Route>

       <Route path="/">
         <Home />
       </Route>

     </Switch>
     
   </Router>
  );
}

export default App;
