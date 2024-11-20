import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUser, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <h1 className="logo">OneStop CSR</h1>
            
            {/* Mobile Menu Icon */}
            <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
                <li><Link to="/"><FaHome /> Home</Link></li>
                <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
                <li><Link to="/aboutus"><FaUser /> About us</Link></li>
                <li><Link to="/login"><FaSignInAlt /> Login</Link></li>
                <li><Link to="/signup"><FaUser /> Signup</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
