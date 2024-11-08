import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from '../components/Chatbot';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to OneStop CSR Platform</h1>
                <p>Empowering Corporations, NGOs, and Volunteers to create a positive impact together.</p>
            </div>
            <div className="project-preview">
                <h2>Featured Project</h2>
                <div className="project-card">
                    <h3>Clean Water Initiative</h3>
                    <p>Providing access to clean drinking water in rural areas.</p>
                    <Link to="/projects">
                        <button className="show-more-button">Show More Projects</button>
                    </Link>
                </div>
            </div>
            {/* Chatbot Component */}
            <Chatbot />
        </div>
    );
}

export default Home;
