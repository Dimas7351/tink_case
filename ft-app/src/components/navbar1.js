import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar1() {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>tft</a>
      <ul className='karam'>
        <li ><Link to='/personal'>PersonalAccount</Link></li>
        <li><Link to='/Tournament'>Tournament</Link></li>
        <li><Link to='/TournamentList'>TournamentList</Link></li>
        <li><Link to='/signin'>SignIn</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar1;