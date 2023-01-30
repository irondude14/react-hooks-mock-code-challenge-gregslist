import React from 'react';

function Search({
  setSearchResult,
  onHandleSearchBar,
  setSortBy,
  searchResult,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onHandleSearchBar();
  }

  function handleChange(e) {
    setSearchResult(e.target.value);
  }

  function handleSort(e) {
    setSortBy(e.target.value);
  }

  return (
    <>
      <form className='searchbar' onSubmit={handleSubmit}>
        <input
          type='text'
          id='search'
          placeholder='search free stuff'
          value={searchResult}
          onChange={handleChange}
        />
        <button type='submit'>🔍</button>
      </form>
      <label>Sort By: </label>
      <select onChange={handleSort}>
        <option value='none'>None</option>
        <option value='location'>Location</option>
      </select>
    </>
  );
}

export default Search;
