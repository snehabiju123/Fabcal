import {useState} from 'react'
import './styles.css';
import  Calendar_App from './Calendar_App';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Book from './Book';
import Create_New_Book_Type from './CreateNewBooking';
function HomePage()
{
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[isAdmin,setisAdmin]=useState(false);
  const [selectedDate,setSelectedDate] = useState(new Date);
  const [selectedTime,setSelectedTime]=useState('');
  const [country,setCountry]=useState('Asia/Calcutta');
  const handleAdminLogin=(e)=>
    {
        e.preventDefault();
        if(username=='admin' && password=='admin123')
            {setisAdmin(true);

            } 
        else
        alert('Invalid Credentials');
    }

  const handleAdminLogout=()=>
    {
        setisAdmin(false); 
    }
const handleTimeChange=(e)=>
{
    setSelectedTime(e.target.value);
}

const handleDateChange=(e)=>
    {setSelectedDate(e.target.value);}

const handleCountryChange=(e)=>
    {
      setCountry(e.target.value)
    }
  

    return (
      <Router>
      <Routes>
        
        <Route path="/" element={isAdmin?(
          <Navigate to="/Book" replace/>
           ):(
        <div className="container">
             <div class="logo"> 
             📆 Fabcal
             </div>
            <div className="admin-login-container">
              <h1 id="login_h1">Admin Login</h1>
              <form onSubmit={handleAdminLogin}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
              </form>
             
            </div>  
          
             <div className="calendar-container">
        
             <div className="calendar-controls">
             <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
            <label htmlFor="time">Time:</label>
            <select id="time" value={selectedTime} onChange={handleTimeChange}>
              <option value="">Select time</option>
              <option value="9:00 am">9:00 am</option>
              <option value="9:15 am">9:15 am</option>
              <option value="9:30 am">9:30 am</option>
              <option value="9:45 am">9:45 am</option>
              <option value="10:00 am">10:00 am</option>
              <option value="10:15 am">10:15 am</option>
              <option value="10:30 am">10:30 am</option>
              <option value="10:45 am">10:45 am</option>
              <option value="11:00 am">11:00 am</option>
              <option value="11:15 am">11:15 am</option>
              <option value="11:30 am">11:30 am</option>
            </select>
            <label htmlFor="country">Country:</label>
            <select id="country" value={country} onChange={handleCountryChange}>
              <option value="Asia/Calcutta">Asia/Calcutta</option>
              <option value="America/New_York">America/New_York</option>
              <option value="Europe/London">Europe/London</option>
            </select>
             </div>
             <div className="calendar-data">
            {<Calendar_App/>}
             </div>
             </div>
             </div>
            )}/> 
             <Route path="/Book" element={<Book />} />
             <Route path="/CreateNewBooking" element={<Create_New_Book_Type />} />
            </Routes>
             </Router>
  );
}

export default HomePage;
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             





















          



































