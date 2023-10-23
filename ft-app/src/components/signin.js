import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './reg.css';
import Navbar1 from './navbar1';

function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();


  const handleSubmit = () => {
    fetch('http://localhost:5000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        throw new Error('Authentication failed');
      }
    })
    .then((data) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user_id', data.user_id);
      const accessToken = localStorage.getItem('access_token');
      const userId = localStorage.getItem('user_id');
      console.log(accessToken);
      console.log(userId);
      history.push('/personal');
    })
    .catch((error) => {
      setPassword('');
      setErrorMessage("Имя пользователя или пароль неверны");
      console.error(error);
    });
  };
  

  return (
    <div>
      <Navbar1 />
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
    </div>
  );
}

export default SignIn;