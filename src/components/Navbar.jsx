import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar(){

 return (
    <nav className="navbar">
      <h1 className="logo">🎮 IndieGames Hub</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end activeclassname="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/games" activeclassname="active">Games</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" activeclassname="active">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar