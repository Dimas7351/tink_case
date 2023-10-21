import React from 'react';
import { FaTableTennis, FaUsers, FaTrophy } from 'react-icons/fa'; // You'll need to install the 'react-icons' package
import './Home.css'
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Сервис турниров для игры в настольный футбол</h1>
      <p>Explore and organize table football tournaments with ease. Join our community and compete for the top spot!</p>
      <div className="icon-container">
        <div className="icon">
          <FaTableTennis size={50} />
          <p>Table Tennis</p>
        </div>
        <div className="icon">
          <FaUsers size={50} />
          <p>Community</p>
        </div>
        <div className="icon">
          <FaTrophy size={50} />
          <p>Tournaments</p>
        </div>
      </div>
    </div>
  );
}

export default Home;