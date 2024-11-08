import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
    return (
        <div className="home-container">
            <div className="welcome-section">
                <h1 className="welcome-heading">Welcome to OneStop CSR Platform</h1>
                <p className="welcome-text">
                    Empowering Corporations, CSR Professionals, NGOs, and Volunteers to make a greater impact together.
                </p>
            </div>
            <div className="button-card-container">
                <Link to="/login" className="button-card">
                    <button className="styled-button">Login</button>
                </Link>
                <Link to="/signup" className="button-card">
                    <button className="styled-button">Signup</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
