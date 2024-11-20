import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous errors
    
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password,
            });
    
            if (response.data?.user) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/dashboard');
            } else {
                setErrorMessage('Invalid email or password.');
            }
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || 'Login failed. Please try again.'
            );
            console.error('Error:', error);
        }
    };
    
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login to OneStopCSR</h2>
                <p className="subtitle">Your gateway to CSR project management.</p>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p className="signup-prompt">
                    Don't have an account? <a href="/signup">Sign up here</a>.
                </p>
            </div>
        </div>
    );
}

export default Login;
