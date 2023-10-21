import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>FTBL</a>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/registration'>Registration</Link></li>
        <li><Link to='/PersonalAccount'>Lc</Link></li>
        <li><Link to='/Tournament'>Tournament</Link></li>
        <li><Link to='/TournamentList'>TournamentList</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;