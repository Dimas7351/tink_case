import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './reg.css';
import Navbar1 from './navbar1';
function SignUp() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, confirmPassword] = useState('');
  const history = useHistory();
  const [isErrorShake, setIsErrorShake] = useState(false); // New state for shaking animation

  const handleSubmit = () => {
    if (password !== confirm_password) {
      setErrorMessage('Пароли не совпадают');
      confirmPassword('');
      setPassword('');
      setIsErrorShake(true);
      setTimeout(() =>{
        setIsErrorShake(false);
      },500);
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
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        throw new Error('Registration failed');
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
     };

  return (
    <div> 
    <Navbar1 />
    <div className={`registration-container ${isErrorShake ? 'error-shake' : ''}`}>    
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
            You have an account? Sign In
      </button>
    </div>
    </div>
  );
}

export default SignUp;