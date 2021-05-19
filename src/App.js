import React, { useState, useEffect } from 'react';
import './App.css';
import db from 'firebase';
import Login from './Login';
import Hero from './Hero';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';


function App() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwrodError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {

    setEmail('');
    setPassword('');

  }

  const clearErrors = () => {
    setPasswordError('');
    setPasswordError('');
  }


  const handelLogin = () => {
    clearErrors();

    db
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err =>  {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setemailError(err.message);
          break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;

      }

    });

  };

  const handleSignup = () => {
    clearErrors();

    db
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err =>  {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setemailError(err.message);
          break;
          case "auth/weak password":
            setPasswordError(err.message);
            break;
            

      }

    });

  }


  const handleLogout = () =>{
    
    db.auth().signOut()

  };

  const authListener = () => {
    db.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs();
        setUser(user);
      }else{
        setUser('');
      }

    })

  }

  useEffect(() =>{
    authListener();

  },[]);

 
  const name = useSelector(state => state.profile.name);

  return (

   <Router>

     <Header/>

     {user ?(

<Hero handleLogout={handleLogout} />

     ) : (

      <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handelLogin={handelLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwrodError={passwrodError}
      
      />

     )}



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
