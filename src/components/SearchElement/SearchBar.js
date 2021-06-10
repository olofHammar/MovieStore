import React from "react"
import { useState } from "react"
import * as FaIcons from "react-icons/fa"
import "../../styles/searchPage.css"

function Searchbar({ onSearch }) {
  const [searchText, setSearchText] = useState("")

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText)
    }
  }

  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Search movies"
        />
        <FaIcons.FaSearch
          className="searchBarIcon"
          onClick={() => {
            onSearch(searchText)
          }}
        />
      </div>
    </div>
  )
}

export default Searchbar
