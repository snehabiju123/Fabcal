import React from 'react';
import Booking_Type from './Booking_Type';
import  { useState } from 'react';
import Create_New_Book_Type from './CreateNewBooking';
import './book-type-list.css'
const bookObj = {
  items: [
    {title:'15 minuite meeting',
      duration: '15',
      url: 'https://example.com/meeting/15min'
    },
    {title:'30 minuite meeting',
      duration: '30',
      url: 'https://example.com/meeting/30min'
    },
    {title:'60 minuite meeting',
      duration: '60',
      url: 'https://example.com/meeting/60min'
    }
  ]
};

const BookTypeList = () => {
    const [bookItems, setBookItems] = useState(bookObj.items);
    const handleSubmit = (newItem) => {
      setBookItems([...bookItems, newItem]);
      bookObj.items = [...bookItems, newItem];
    };
  return (
    <div>
    <ul type="none" id="list">
      {bookObj.items.map((item, index) => (
        <li key={index}>
          <Booking_Type title={item.title} duration={item.duration} url={item.url} />
        </li>
      ))}
    </ul>
    <Create_New_Book_Type onSubmit={handleSubmit} />
    </div>
  );
};

export default BookTypeList;