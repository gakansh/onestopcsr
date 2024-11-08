import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = { name: 'Test User', role: 'corporation' };
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button onClick={handleLogin}>Log in</button>
            </form>
        </div>
    );
}

export default Login;
