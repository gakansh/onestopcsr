import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();

    const options = [
        { name: 'CSR Project Management', route: '/csr-management' },
        { name: 'NGO/Partner Management', route: '/ngo-management' },
        { name: 'Volunteer Management', route: '/volunteer-management' },
        { name: 'Compliance Tracking', route: '/compliance-tracking' },
        { name: 'Reporting & Impact Measurement', route: '/reporting' },
        { name: 'Donation Management', route: '/donation-management' },
        { name: 'Employee Engagement', route: '/employee-engagement' },
    ];

    const handleNavigation = (route) => {
        navigate(route);
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome to OneStopCSR</h1>
            <p>Select an option to get started:</p>
            <div className="options-grid">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="option-card"
                        onClick={() => handleNavigation(option.route)}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
