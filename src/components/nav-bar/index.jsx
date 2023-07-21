// Navbar.js
import React from 'react';
import "./nav.css";
import { NavLink, useLocation }  from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/'; // Check if the current path is the home path '/'
  const isProjects = location.pathname === "/projects";

  return (
    <div className="nav-bar">
      <div className='nameContainer'>
        <p className="name">Austin Lynes</p>
        <p className="badge">#GameDev#FullStackWebDev</p>
      </div>
      <div className="links">
          <NavLink to={"/"}  className={`nav-link ${isHome ? "active" : ""}`}  >Home</NavLink>
          <NavLink to={"/about-me"} className={`nav-link ${isProjects ? "active" : ""}`}  >About Me</NavLink>
          <NavLink to={"/projects"} className={`nav-link ${isProjects ? "active" : ""}`}  >Projects</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
