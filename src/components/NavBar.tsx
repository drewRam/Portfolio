import React from 'react';
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a className="nav-link" href="#About">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#Experience">Experience</a></li>
          <li className="nav-item"><a className="nav-link" href="#Projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#Contacts">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;