import React from 'react'
import Profile from './Profile';
import styles from '../styles/home.css';

function Home() {
    return (
        <div className="homeContainer">
           <h1>This is home </h1> 
            <Profile/>
        </div>
    )
}

export default Home
