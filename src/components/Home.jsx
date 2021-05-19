import React, { useEffect, useState } from 'react'
import Profile from './Profile';
import Row from './Row';
import movieLists from '../movieLists';
import '../styles/home.css';
import Slideshow from './Slideshow';

function Home() {

    return (
        <div className="homeContainer">
        <Slideshow />
        <Row title="Top Movies" 
             category={ movieLists.topMovies }
             rowId="rowOne"
             id="topMovies"/>
        <Row title="Action & Adventure Movies" 
             category={ movieLists.actionMovies }
             rowId="rowTwo"
             id="actionMovies"/>
        <Row title="Comedy Movies" 
             category={ movieLists.comedyMovies }
             rowId="rowThree"
             id="comedyMovies"/>
         <Row title="Documentary" 
             category={ movieLists.documentayMovies }
             rowId="rowFour"
             id="documentary"/>
        <Row title="Animated Movies" 
             category={ movieLists.animatedMovies }
             rowId="rowFive"
             id="animatedMovies"/>
        <Row title="Drama Movies" 
             category={ movieLists.dramaMovies }
             rowId="rowSix"
             id="dramaMovies"/>
        <Row title="Family Movies" 
             category={ movieLists.familyMovies }
             rowId="rowSeven"
             id="familyMovies"/>
        <Row title="Horror Movies" 
             category={ movieLists.horrorMovies }
             rowId="rowEight"
             id="horrorMovies"/>
   </div>
    )
}

export default Home
