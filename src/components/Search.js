import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
                  <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />

      </form>
    );
}

export default Search;