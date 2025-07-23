import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar(){

 return (
    <nav className="navbar">
      <h1 className="logo">🎮 IndieGames Hub</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end  className="nav-link" activeclassname="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/games" className="nav-link" activeclassname="active">Games</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="nav-link" activeclassname="active">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar