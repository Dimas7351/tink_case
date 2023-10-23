import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>tft</a>
    </nav>
  );
}

export default Navbar;