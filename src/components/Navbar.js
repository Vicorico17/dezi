import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/dezi-logo.png" alt="DEZI Logo" className="navbar-logo" />
        DEZI
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#services">Servicii</a>
        <a href="#about">Despre</a>
        <a href="#book" className="book-appointment-button">Programează o vizită</a>
      </div>
    </nav>
  );
};

export default Navbar; 