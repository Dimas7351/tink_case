import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './reg.css';

function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async () => {
    if (isSignIn) {
      // Handle sign-in logic here
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.status === 200) {
        // Sign-in was successful
        history.push('/personal');
      } else {
        // Handle sign-in error, e.g., incorrect credentials
      }
    } else {
      // Navigate to the sign-up page
      history.push('/signup');
    }
  };

  return (
    <div className="registration-container">
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
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
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <button className="toggle-button" onClick={() => history.push('/signup')}>
  Don’t have an account? Sign Up
      </button>
    </div>
  );
}

export default SignIn;