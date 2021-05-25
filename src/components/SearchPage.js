import React, {useState} from 'react'
import CardList from '../components/SearchElement/CardList'
import SearchBar from '../components/SearchElement/SearchBar'

import MovieSource from '../api/MovieSource';

function SearchPage() {
    const [results, setResults] = useState( [] );
  
    const onSearch = async (text) => {
      const movieResults = await MovieSource.get("/", {
        params: { s: text, apiKey: "38795606" },
      });
  
      setResults(movieResults)
    };
  
    return (
      <div className="App">
        <div className="container searchApp">
          <SearchBar onSearch={onSearch} />
          <div className="row_movies">

          <CardList results={results} 
                
             
         
            />
          
          </div>
          
        </div>
      </div>
    );
  }
  
  export default SearchPage;