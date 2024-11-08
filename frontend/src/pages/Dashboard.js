import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';
import './Dashboard.css';

function Dashboard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects from backend (to be implemented later)
        axios.get('/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="dashboard">
            <h2>Welcome to your Dashboard</h2>
            <div className="project-list">
                {projects.map(project => (
                    <div className="project-card" key={project._id}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <button>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
