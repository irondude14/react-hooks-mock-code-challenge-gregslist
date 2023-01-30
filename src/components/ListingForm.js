import React, { useState } from 'react';

export default function ListingForm({ onAddListing }) {
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      location,
      description,
      image,
    };
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddListing(data);
        setLocation('');
        setImage('');
        setDescription('');
      });
  }

  return (
    <form className='submit-form' onSubmit={handleSubmit}>
      <h3>Add Listing</h3>
      <label htmlFor='title'>Listing Location:</label>
      <input
        type='text'
        value={location}
        placeholder='Add location...'
        onChange={(e) => setLocation(e.target.value)}
      />

      <label htmlFor='description'>Listing Description:</label>
      <textarea
        type='text'
        value={description}
        placeholder='Add description...'
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor='image'>Listing Image:</label>
      <input
        type='text'
        value={image}
        placeholder='Add image...'
        onChange={(e) => setImage(e.target.value)}
      />
      <img src={image} alt='Listing Preview' />

      <input type='submit' value='Add Listing' id='submitBtn' />
    </form>
  );
}
