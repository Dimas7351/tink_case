import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaIdCard } from 'react-icons/fa'; // Import icons
import './personal.css';
function PersonalAccount() {
  const [user] = useState(null);// setuser

  useEffect(() => {
    // Fetch user data from your server and update the 'user' state with the data
    // Example: fetchUserData().then(data => setUser(data));
  }, []);

  return (
    <div className="personal-account-container">
      <h2>Personal Account</h2>
      {user ? (
        <div>
          <h3>User Information</h3>
          <div className="user-info">
            <FaUser className="user-icon" />
            <p>
              <strong>Name:</strong> {user.name}
            </p>
          </div>
          <div className="user-info">
            <FaIdCard className="id-icon" />
            <p>
              <strong>ID:</strong> {user.id}
            </p>
          </div>
          <Link to="/personal/tournaments" className="tournaments-link">
            My Tournaments
          </Link>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default PersonalAccount;