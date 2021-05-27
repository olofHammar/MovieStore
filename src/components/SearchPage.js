import React, { useState, useEffect } from 'react'
import CardList from '../components/SearchElement/CardList'
import SearchBar from '../components/SearchElement/SearchBar'
import MovieSource from '../api/MovieSource';
import '../styles/searchPage.css';
import image from '../img/m_logo.png';

function SearchPage() {
    const [results, setResults] = useState( [] );
  
    const onSearch = async (text) => {
      const movieResults = await MovieSource.get("/", {
        params: { s: text, apiKey: "38795606" },
      });
  
      setResults(movieResults)
    };
  
    return (
      <div className="searchPageContainer">
        <div className="topContainer">
          <img src={ image } alt="logo" className="searchLogo" />
          <SearchBar onSearch={onSearch} />
        </div>
            <div className="resultContainer">
              <CardList results={results}   
            />
          </div>
      </div>
    );
  }
  
  export default SearchPage;