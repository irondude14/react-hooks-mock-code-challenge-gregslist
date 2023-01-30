import React, { useState } from 'react';

function ListingCard({ listing, onRemoveListing }) {
  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(!favorite);
  }

  function handleDelete() {
    fetch('http://localhost:6001/listings/' + listing.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    onRemoveListing(listing.id);
  }

  return (
    <li className='card'>
      <div className='image'>
        <span className='price'>$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className='details'>
        {favorite ? (
          <button
            className='emoji-button favorite active'
            onClick={handleFavorite}
          >
            ★
          </button>
        ) : (
          <button className='emoji-button favorite' onClick={handleFavorite}>
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className='emoji-button delete' onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
