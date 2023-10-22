import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './reg.css';

function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
      // Handle sign-in logic here
     fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      .then((response) => {
      if (response.status === 201) {
        // Sign-in was successful
        history.push('/personal');
      } else {
        setErrorMessage("Имя пользователя или пароль неверны"); // Handle sign-in error, e.g., incorrect credentials
      }})
    
  };

  return (
    <div className="registration-container">
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
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
        <button type = "button" className="submit-button" onClick={handleSubmit}>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Выводим сообщение об ошибке, если оно есть */}
      <button className="toggle-button" onClick={() => history.push('/signin')}></button>
      <button className="toggle-button" onClick={() => history.push('/signup')}>
  Don’t have an account? Sign Up
      </button>
    </div>
  );
}

export default SignIn;