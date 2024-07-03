import React from 'react';
import {useState} from 'react';
import './book_type.css';

export  default function Booking_Type({title,duration,url})
{
    const [isBookingOn, setIsBookingOn] = useState(true);
    const handleToggle = () => {
        setIsBookingOn(!isBookingOn);}
        
    return (
        
           <div className="card">
              <div className="card-body">
                <table id="book"border="1">
                  <thead>
                <tr><td>
                <h5 className="card-title">{title}</h5><hr/>
                <a className="card-desc" href={url}>/{duration}-minute-meeting </a>
               <a className="copy-link" href="#">Copy link</a><br/></td></tr></thead>
               <tbody>
                <tr><td><button className="book-toggle-btn" onClick={handleToggle}>
                  {isBookingOn ? 'Booking is ON' : 'Booking is OFF'}
                </button><br/><br/>
                🕐 {duration} minutes</td></tr>
                <tr><td><p className="card-text">Book a meeting with me for {duration} minutes!</p></td></tr>
                <tr><td><div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <p>Share</p>
                    <a href="#"><img src="email.png" width="20" height="20"/>
                    </a>
                    <a href="#">
                    <img src="./facebook.png" width="20" height="20"/>
                    </a>
                    <a href="#">
                    <img src="linkedin.png" width="20" height="20"/>
                    </a>
                    <a href="#">
                    <img src="instagram.png" width="20" height="20"/>
                    </a>
                  </div>
                </div></td></tr>
                <tr><td>
                <div className="d-flex justify-content-between mt-3">
                  <a  href="#">Embed on Website</a>
                  <a  href="#">Embed in Email</a>
                </div></td></tr>
                <tr><td>
                <div className="d-flex justify-content-around mt-3">
                  <a className="delete-btn"  href="#">Delete</a>
                  <a className="clone-btn" href="#">Clone</a>
                  <a className="edit-btn" href="#">Edit</a>
                </div></td></tr>
                </tbody>
                </table>
              </div>
            </div> 
            
    );
}




































