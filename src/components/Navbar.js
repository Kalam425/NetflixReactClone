import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ toggleDarkMode }) {
  return (
    <header className="navbar">
      <img src='https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg' alt='Netflix Logo' className="logo-img"></img>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tv-shows">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/my-list">My List</Link></li>
        </ul>
      </nav>

    
     <div className='username-section'>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className='search-icon'><img src='/img/search-icon.jpg' alt='search'></img></div>
      <div className='notification'><img src='/img/bell-icon.jpg'></img></div>
      <div className='username-box'><img src='/img/Netflix-avatar1.jpg'></img></div>
      <div className='username-arrow'><img src='/img/down-arrow.jpg'></img></div>
      </div>
      <button onClick={toggleDarkMode} className="toggle-btn">🌙</button>
    </header>
  );
}

export default Navbar;
