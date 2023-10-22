import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './reg.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, confirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    if (password !== confirm_password) {
      setErrorMessage('Пароли не совпадают');
      return;
    }
    // For this example, I'll use a single API endpoint /auth to handle both sign-up and sign-in.
    // You can differentiate between sign-up and sign-in logic in your backend.
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((data) => {
        if (data.status === 201) {
          // Redirect to the personal page after successful sign-up or sign-in
          history.push('/Home');
        } else {
          // Handle authentication error
          console.error('Authentication failed.');
        }
      });
  };

  return (
    <div className="registration-container">
      <h2>Sign Up</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <input
          type="password"
          placeholder="Confirm Password"
          value={confirm_password}
          onChange={(e) => confirmPassword(e.target.value)}
        />
        <button type="button" className="submit-button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Выводим ошибку, если она есть */}
      <button className="toggle-button" onClick={() => history.push('/signin')}>
            You have an account! sign In
      </button>
    </div>
  );
}

export default SignUp;