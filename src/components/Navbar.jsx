import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false); // Track dark/light mode

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme', !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-theme' : ''}`}>
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
      
      <div className="navbar-right">
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
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;