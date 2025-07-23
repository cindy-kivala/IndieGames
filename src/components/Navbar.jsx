import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">🎮 IndieGames App</h1>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className="nav-link" activeclassname="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/games" className="nav-link" activeclassname="active">Games</NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className="nav-link" activeclassname="active">Favorites</NavLink>
          </li>

        </ul>
      </div>
      
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍
          </button>
          
        </form>
      </div>
    </nav>
  );
}

export default Navbar;