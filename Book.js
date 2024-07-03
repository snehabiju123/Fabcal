import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import BookTypeList from './Book_type_list';
import './book.css';


function Book() {

  return (
    
      <div className="container">
      
      <nav className="navbar">
        <ul id="nav-ul" type="none"><li>
          <a className="navbar-brand" href="#">Booking Types</a></li>
          <li><a className="navbar-brand" href="#">My Bookings</a></li></ul>
        
      </nav>
      <h2 className="mt-4">Booking types</h2> 
      <Link to='/CreateNewBooking'>
      <button className="create-new-btn">+ Create new booking type</button>
      </Link>
      <br/>
      <div id="book-type-list"> <BookTypeList/></div>   
      </div> 
     
     
  );
}

  
export default Book;