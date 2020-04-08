import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar(props) {
  function renderGenreList() {
    return (
      <select className="filter-select" onChange={props.handleGenre}>
        <option value={"All"}>All</option>
        {props.genreList.map((genre, index) => (
          <option key={index} value={genre.toString()}>
            {genre}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div>
      <div role="form" className="formContainer">
        <input
          id="search"
          className="seach-container"
          placeholder="Search.."
          onChange={props.handleChange}
          value={props.searchText}
        />
        <div className="submit-button" onClick={props.handleSearch}>
          <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
        </div>
        <div className="clear-button" onClick={props.handleClear}>
          <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
        </div>
      </div>
      <div className="select-container">
        Filter:
        <select className="filter-select" onChange={props.handleSelect}>
          <option value="name">Album name</option>
          <option value="author">Author</option>
        </select>
        Genre:
        {renderGenreList()}
      </div>
    </div>
  );
}
