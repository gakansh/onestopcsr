import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        try {
            const response = await axios.post('http://localhost:3001/signup', {
                username,
                email,
                password,
            });
            setMessage('Signup successful! You can now log in.');
        } catch (error) {
            setError(error.response?.data?.message || 'Signup failed. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1>Create Your Account</h1>
                {message && <p className="message success">{message}</p>}
                {error && <p className="message error">{error}</p>}
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
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
                    <button type="submit">Sign Up</button>
                </form>
                <p className="login-prompt">
                    Already have an account? <a href="/login">Log in here</a>.
                </p>
            </div>
        </div>
    );
}

export default Signup;
