import React from 'react';
import ListingCard from './ListingCard';

function ListingsContainer({ listings, onRemoveListing }) {
  return (
    <main>
      {listings.map((listing) => (
        <ul className='cards' key={listing.id}>
          <ListingCard listing={listing} onRemoveListing={onRemoveListing} />
        </ul>
      ))}
    </main>
  );
}

export default ListingsContainer;
