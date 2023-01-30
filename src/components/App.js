import React, { useEffect, useState } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';
import ListingForm from './ListingForm';

function App() {
  const [listings, setListings] = useState([]);
  const [searchResult, setSearchResult] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  function handleSearchBar() {
    setListings(
      listings.filter((listing) => {
        return listing.description
          .toLowerCase()
          .includes(searchResult.toLowerCase());
      })
    );
  }
  console.log(searchResult);
  console.log(listings);

  function addListing(newListing) {
    setListings([...listings, newListing]);
  }

  function removeListing(id) {
    setListings(listings.filter((listing) => listing.id !== id));
  }

  const sortedListings = [...listings].sort((listingA, listingB) => {
    if (sortBy === 'none') {
      return true;
    } else if (sortBy === 'location') {
      return listingA.location
        .toUpperCase()
        .localeCompare(listingB.location.toUpperCase());
    } else {
      return false;
    }
  });

  return (
    <div className='app'>
      <Header
        setSearchResult={setSearchResult}
        searchResult={searchResult}
        onHandleSearchBar={handleSearchBar}
        setSortBy={setSortBy}
      />
      <ListingForm onAddListing={addListing} />
      <ListingsContainer
        listings={sortedListings}
        onRemoveListing={removeListing}
      />
    </div>
  );
}

export default App;
