import React, { useEffect, useState } from 'react'
import Profile from './Profile';
import Row from './Row';
import styles from '../styles/home.css';

function Home() {

    return (
        <div className="homeContainer">
        <h1>This is home </h1>
        <Profile/>
        <Row title="Spring Movies" keyWord="?s=spring&apikey=38795606"/>
        <Row title="Batman Movies" keyWord="?s=batman&apikey=38795606"/>
        <Row title="Star Wars Movies" keyWord="?s=star wars&apikey=38795606"/>
        <Row title="Harry Potter Movies" keyWord="?s=harry potter&apikey=38795606"/>
        </div>
    )
}

export default Home
