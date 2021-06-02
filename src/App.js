import React, { useState, useEffect } from 'react';
import './App.css';
import { db, auth } from './firebase';
import Home from './components/Home';
import Cart from './components/Cart';
import Support from './components/Support';
import Collections from './components/Collections';
import MyList from './components/MyList';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Family from './components/FamilyFilter';
import SearchPage from './components/SearchPage';
import { useDispatch, useSelector} from 'react-redux';
import { setUserLogOutState, getUserId } from './features/userSlice'; 




function App() {

  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const [cartItems, setCartItems] = useState([]);
  const [myList, setMyList] = useState([]);

  const getMyListFromFirebase = () => {
    const ref = db.collection('users').doc(userId);
    ref.collection('myList').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })
      )
      setMyList(tempItems);
    })
  }

  const getCartItems = () => {
    const ref = db.collection('users').doc(userId);
    ref.collection('cartItems').onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })
      )
      setCartItems(tempItems);
    })
  }

  useEffect(() =>{
    if (userId === null) {
      console.log('no user');
    } else {
      console.log('found user')
      getCartItems();
      getMyListFromFirebase();
      myList.map(m => (
        console.log(m)
      ))
    }
  },[userId]);

  const handleLogout = () =>{    
    setCartItems([]);
    auth.signOut()
    .then(() =>{
      dispatch(setUserLogOutState())
    })
    .catch((err) =>alert(err.message))
  };

  return (
    
    <Router>
        <Sidebar handleLogout={handleLogout} cartItems={cartItems} />
          <Switch>

            <Route path="/cart">
              <Cart cartItems={ cartItems } />
            </Route>
    
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/Home">
              <Home/>
            </Route>

            <Route path="/SearchPage">
              <SearchPage/>
            </Route>
            
            <Route path='/Support'>
              <Support />
            </Route>

            <Route path= '/collections/:title'>
              <Collections />
            </Route>


            <Route path="/family">
              <Family />
                </Route>

            <Route path="/myList">
              <MyList myList={ myList } />
            </Route>

         </Switch>

    </Router>
  );
}

export default App;
