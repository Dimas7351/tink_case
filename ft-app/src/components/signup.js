import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './reg.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async () => {
    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password }),
    });

    if (response.status === 201) {
      // Registration was successful
      history.push('/personal');
    } else {
      // Handle registration error, e.g., username already exists
    }
  };

  return (
    <div className="registration-container">
      <h2>Sign Up</h2>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      <button className="toggle-button" onClick={() => history.push('/signin')}>
            You have an account! sign In
      </button>
    </div>
  );
}

export default SignUp;