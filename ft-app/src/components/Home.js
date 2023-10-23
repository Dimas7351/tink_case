import React from 'react';
import { FaFutbol, FaUsers, FaTrophy } from 'react-icons/fa'; // You'll need to install the 'react-icons' package
import './Home.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
    <div className="home-container">
      <h1 className='h1'>Welcome to Сервис турниров для игры в настольный футбол</h1>
      <div className='p1'>
      <p >Explore and organize table football tournaments with ease. Join our community and compete for the top spot!</p>

      </div>
      <div className="icon-container">
        <div className="icon">
          <Link className='lki' to='/TournamentList'>
          <FaFutbol size={50} />
          </Link>
          
          <p className='iconkr'> 
          <a href="/personal">Tournaments List</a>
          </p>
        </div>
        <div className="icon">
        <Link className='lki' to='/personal'>
          <FaUsers size={50} />
          </Link>
          <p className='iconkr'>
         <a href="/personal">Personal Account</a>
        </p>
        </div>
        <div className="icon">
          <Link className='lki' to='/Tournament'>
          <FaTrophy size={50} />
          </Link>
          <p className='iconkr'>
            <a href="/personal">Tournaments</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;