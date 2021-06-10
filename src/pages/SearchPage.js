import React, { useState, useEffect } from "react"
import CardList from "../components/SearchElement/CardList"
import SearchBar from "../components/SearchElement/SearchBar"
import MovieSource from "../api/MovieSource"
import "../styles/searchPage.css"
import image from "../img/m_logo.png"

function SearchPage() {
  const [results, setResults] = useState([])
  const [matches, setMatches] = useState(0)
  const [startedSearch, setStartedSearch] = useState(false)

  const onSearch = async (text) => {
    const movieResults = await MovieSource.get("/", {
      params: { s: text, apiKey: "38795606", type: "movie" },
    })
    setResults(movieResults)
    setStartedSearch(true)
    //console.log(movieResults)
  }

  useEffect(() => {
    if (results.data !== undefined) {
      if (results.data.totalResults === undefined) {
        setMatches(0)
        return
      }
      setMatches(results.data.totalResults)
    }
    //console.log(matches);
  })

  return (
    <div className="searchPageContainer">
      <div className="topContainer">
        <img src={image} alt="logo" className="searchLogo" />
        <SearchBar onSearch={onSearch} />
        {startedSearch ? (
          <>
            <p>{`Found ${matches} titles matching your search`}</p>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="resultContainer">
        <CardList results={results} />
      </div>
    </div>
  )
}

export default SearchPage
