import React, { useEffect, useState } from 'react'
import Profile from './Profile';
import Row from './Row';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


import styles from '../styles/home.css';



const Home = ({handleLogout}) => {

    return (

        <section className="hero">

        <nav>
        <div className="headerContainer">
            <Link to="cart" className="headerLink">
                Cart
            </Link>
        </div>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
        </nav>
    
        <div className="homeContainer">
        <h1>This is home </h1>
        <Profile/>
        <Row title="Spring Movies" keyWord="?s=spring&apikey=38795606"/>
        <Row title="Batman Movies" keyWord="?s=batman&apikey=38795606"/>
        <Row title="Star Wars Movies" keyWord="?s=star wars&apikey=38795606"/>
        <Row title="Harry Potter Movies" keyWord="?s=harry potter&apikey=38795606"/>
        </div>
        </section>
    )
}

export default Home;
