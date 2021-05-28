import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import Home from './components/Home';
import Cart from './components/Cart';
import Support from './components/Support';
import Collections from './components/Collections';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { setUserLogOutState } from './features/userSlice'; 
import Family from './components/FamilyFilter';


function App() {

  const dispatch = useDispatch();

  const handleLogout = () =>{    
    auth.signOut()
    .then(() =>{
      dispatch(setUserLogOutState())
    })
    .catch((err) =>alert(err.message))
  };

  return (
    <Router>
        <Sidebar handleLogout={handleLogout} />
          <Switch>

            <Route path="/cart">
              <Cart />
            </Route>
    
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/Home">
              <Home/>
            </Route>
            
            <Route path='/Support'>
              <Support />
            </Route>

            <Route path= '/collections'>
              <Collections />
            </Route>

            <Route path="/family">
              <Family />
            </Route>

         </Switch>

    </Router>
  );
}

export default App;
