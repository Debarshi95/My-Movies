import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar__root">
      <div className="navbar__nav">
        <NavLink to="/" className="navbar__home">
          MyMovies
        </NavLink>
        <div className="navbar__sidenavs">
          <NavLink to="/tv">TV Series</NavLink>
          <NavLink to="/movie">Movies</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
