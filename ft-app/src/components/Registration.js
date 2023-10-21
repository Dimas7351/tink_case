import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Registration() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    // For this example, I'll use a single API endpoint /auth to handle both sign-up and sign-in.
    // You can differentiate between sign-up and sign-in logic in your backend.
    fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, isSignIn }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Redirect to the personal page after successful sign-up or sign-in
          history.push('/personal');
        } else {
          // Handle authentication error
          console.error('Authentication failed.');
        }
      });
  };

  return (
    <div>
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
        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        <button onClick={handleSubmit}>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <p onClick={() => setIsSignIn(!isSignIn)}>
        {isSignIn ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
      </p>
    </div>
  );
}

export default Registration;