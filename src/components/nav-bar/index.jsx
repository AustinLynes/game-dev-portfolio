// Navbar.js
import React from 'react';
import "./nav.css";
import { NavLink }  from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className='nameContainer'>
        <p className="name">Austin Lynes</p>
      </div>
      <div className="links">
        {/* Use React Router Link component for navigation */}
        <NavLink className='nav-link' to="/">Home</NavLink>
        <NavLink className='nav-link' to="/about">About</NavLink>
        <NavLink className='nav-link' to="/skills">Skills</NavLink>
        <NavLink className='nav-link' to="/projects">Projects</NavLink>
        <NavLink className='nav-link' to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
