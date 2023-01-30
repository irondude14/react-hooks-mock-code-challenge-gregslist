import React from 'react';
import Search from './Search';

function Header({
  setSearchResult,
  searchResult,
  onHandleSearchBar,
  setSortBy,
  onAddListing,
}) {
  return (
    <header>
      <h1>
        <span className='logo' role='img'>
          ☮
        </span>
        gregslist
      </h1>
      <Search
        setSearchResult={setSearchResult}
        searchResult={searchResult}
        onHandleSearchBar={onHandleSearchBar}
        setSortBy={setSortBy}
      />
    </header>
  );
}

export default Header;
