import './create_new_book.css';
import React, { useState } from 'react';
const Create_New_Book_Type = ({onSubmit}) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  
  const [duration, setDuration] = useState(15);


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  

  const handleDurationChange = (event) => {
    setDuration(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit booking type data
    const newBookingType = {
        title:title,
        duration: duration.toString(),
        url: url
    };
    onSubmit(newBookingType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Booking Type</h2>
     <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={handleUrlChange}
        />
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={handleDurationChange}
        />
        <span id="dur_span">minutes</span>
      </div>
      
      <div>
        <button type="submit" className="submit">Create Booking Type</button>
      </div>
    </form>
  );
};

export default Create_New_Book_Type;
 































    
