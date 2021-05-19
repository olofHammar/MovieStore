import React from 'react';
import './App.css';
import { db } from './firebase';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Support from './components/Support'
import { useSelector } from 'react-redux';
import Navbar from './components/Sidebar'
import styled from 'styled-components';

import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/*import Home from './Home';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';*/

const Container = styled.div`
  width: 100%;
`;


function App() {
  return (
    <Router>
      <Container>
        <Sidebar />
          <Switch>
            <Route path='/Home' exact component={Home} />
           <Route path='/Cart' component={Cart} />
           <Route path='/Support' component={Support} />
         </Switch>
      </Container>
    </Router>
  );
}

export default App;
