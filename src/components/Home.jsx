import { Link } from 'react-router-dom';
import Row from './Row';
import movieLists from '../movieLists';
import '../styles/home.css';
import ImgSlider from './ImgSlider';
import RowMarvel from './RowMarvel';
import RowMystery from './RowMystery';

function Home() {

    return (
        <div className="homeContainer">

        <ImgSlider />

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

         <Row title="Documentaries" 
             category={ movieLists.documentayMovies }
             rowId="rowFour"
             id="documentary"/>

        <Row title="Animated Movies" 
             category={ movieLists.animatedMovies }
             rowId="rowFive"
             id="animatedMovies"/>

        <Link to='collections/marvel'>
          <RowMarvel />
        </Link>

        <Row title="Drama Movies" 
             category={ movieLists.dramaMovies }
             rowId="rowSix"
             id="dramaMovies"/>

        <Row title="Family Movies" 
             category={ movieLists.familyMovies }
             rowId="rowSeven"
             id="familyMovies"/>
             
        <Link to='collections/mystery'>
          <RowMystery />     
        </Link>
        
        <Row title="Horror Movies" 
             category={ movieLists.horrorMovies }
             rowId="rowEight"
             id="horrorMovies"/>
   </div>
    )
}

export default Home
