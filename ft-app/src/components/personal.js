// PersonalAccount.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PersonalAccount() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from your server
    // Update the 'user' state with the data
  }, []);

  return (
    <div>
      <h2>Personal Account</h2>
      {user ? (
        <div>
          <h3>User Information</h3>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <Link to="/personal/tournaments">My Tournaments</Link>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}
export default PersonalAccount;