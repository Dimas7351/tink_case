import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaIdCard } from 'react-icons/fa'; // Import icons
import './personal.css';
import Navbar1 from './navbar1';

function PersonalAccount() {
  const [user] = useState(null);
  const history = useHistory();
  const accessToken = localStorage.getItem('access_token');

  const handleLogout = () => {
    fetch('http://localhost:5000/logout', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ${accessToken}' // Corrected template string
      }
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_id');
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
          history.push('/signup');
        } else {
          history.push('/signin');
        }
      } else {
        console.error('Logout failed.');
      }
    });
  };

  // Define the UserInfo function here
  // Define the UserInfo function here
  
const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const accessToken = localStorage.getItem('access_token');
  const userId = localStorage.getItem('user_id');
  console.log(userId);
  useEffect(() => {
    if (!accessToken || !userId) {
      history.push('/signin');
    } else if(accessToken && userId) {
      fetch('http://localhost:5000/takeinfo?user_id=${userId}', {
        method: 'GET',
        headers: { 
          Authorization: 'Bearer ${accessToken}'
        }
      })
      .then(response => response.json())
      .then(data => setUserInfo(data))
      .catch(error => console.error('Error fetching user info', error));
    }
  }, [accessToken, userId]);

  return userInfo;
};
const userInfo = UserInfo();

  return (
    <div> 
      <Navbar1 />
    <div className="personal-account-container">
      <h2>Personal Account</h2>
      {userInfo ? (
        <div>
          <h3>User Information</h3>
          <div className="user-info">
            <FaUser className="user-icon" />
            <p>
              <strong>Name:</strong> {userInfo.username}
            </p>
          </div>
          <div className="user-info">
            <FaIdCard className="id-icon" />
            <p>
              <strong>ID:</strong> {userInfo.user_id}
            </p>
          </div>
          <Link to="/personal/tournaments" className="tournaments-link">
            My Tournaments
          </Link>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
      <button type="button" className="logout-button" onClick={handleLogout}></button>
    </div>
    </div>
  );
}

export default PersonalAccount;