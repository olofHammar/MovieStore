import React from 'react'
import '../styles/familyfilter.css';
import Row from '../components/reuseableComponents/Row';
import movieLists from '../movieLists';
import '../styles/home.css';
import ImgSliderFamily from '../components/reuseableComponents/ImgSliderFamily';
import RowFamily from '../components/reuseableComponents/RowFamily';


function Family() {
    return (
        <div className="familyfilterContainer">
        <ImgSliderFamily />
        <Row title="Top Family Movies" 
             category={ movieLists.topfamilyMovies }
             rowId="rowSeven"
             id="topfamilyMovies"/>
        <Row title="Animated Movies" 
             category={ movieLists.animatedMovies }
             rowId="rowFive"
             id="animatedMovies"/>
        <Row title="Sci-fi Family Movies" 
             category={ movieLists.sciFifamilyMovies }
             rowId="rowFive"
             id="sciFifamilyMovies"/>
        <RowFamily />
        <Row title="New Family Movies" 
             category={ movieLists.newFamilyMovies }
             rowId="rowFive"
             id="newFamilyMovies"/>
        <Row title="Family Movies" 
             category={ movieLists.familyMovies }
             rowId="rowSeven"
             id="familyMovies"/>
        <Row title="Adventures Movies" 
             category={ movieLists.adventuresMovies }
             rowId="rowSeven"
             id="adventuresMovies"/>
         
       
   </div>
    )
}


export default Family;
