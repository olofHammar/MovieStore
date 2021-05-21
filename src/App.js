import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import Home from './components/Home';
import Cart from './components/Cart';
import Support from './components/Support';
import Login from './components/Login';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setUserLogOutState, getUserId, getUserEmail } from './features/userSlice'; 


function App() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const userEmail = useSelector(getUserEmail);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setPasswordError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();

    auth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      dispatch(setCurrentUser({
        userId: result.user.uid,
        userEmail: result.user.email
      }))
    })
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

    auth
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
    auth.signOut()
    .then(() =>{
      dispatch(setUserLogOutState())
    })
    .catch((err) =>alert(err.message))
  };

  const authListener = () => {
    auth.onAuthStateChanged(user => {
      if(user) {
        clearInputs();
        dispatch(setCurrentUser({
          userId: user.uid,
          userEmail: user.email
        }))
        console.log( userId + userEmail )
      } else {
        console.log('no user')
      }
    })
  }

  useEffect(() =>{
    authListener();
  },[]);

  return (
    <Router>
      {
        !userId ? (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        ) : (
          <>
        <Sidebar handleLogout={handleLogout} />
          <Switch>

            <Route path="/cart">
              <Cart user={user} />
            </Route>
    
            <Route path="/">
              <Home user={user}/>
            </Route>
            
            <Route path='/Support'>
              <Support />
            </Route>

         </Switch>
         </>
        )
}
    </Router>
  );
}

export default App;
