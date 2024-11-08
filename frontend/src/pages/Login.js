import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a login by redirecting to the Dashboard
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
const handleLogin = () => {
    const user = { name: 'Test User', role: 'corporation' };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/dashboard');
  };
  