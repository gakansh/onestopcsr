import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSRManagement.css';

function CSRManagement() {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        category: '',
        budget: '',
        timeline: '',
        goals: '',
        status: 'Planned',
    });

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:3001/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleAddProject = async () => {
        console.log("Add Project button clicked"); // Debugging message
        try {
            const response = await axios.post('http://localhost:3001/projects', newProject);
            setProjects([...projects, response.data.project]);
            console.log("Project added:", response.data.project); // Debug success
            setNewProject({
                title: '',
                description: '',
                category: '',
                budget: '',
                timeline: '',
                goals: '',
                status: 'Planned',
            });
        } catch (error) {
            console.error('Error adding project:', error); // Debugging error
        }
    };
    return (
        <div className="csr-management-container">
            <h1>CSR Project Management</h1>
            <p>Manage and oversee your CSR projects efficiently.</p>

            <div className="create-project-form">
                <h2>Create a New Project</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={newProject.category}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="budget"
                    placeholder="Budget (in USD)"
                    value={newProject.budget}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="timeline"
                    placeholder="Timeline"
                    value={newProject.timeline}
                    onChange={handleInputChange}
                />
                <textarea
                    name="goals"
                    placeholder="Goals"
                    value={newProject.goals}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddProject}>Add Project</button>
            </div>

            <div className="project-list">
                <h2>Existing Projects</h2>
                {projects.length === 0 ? (
                    <p>No projects available. Start by creating a new project.</p>
                ) : (
                    <ul>
                        {projects.map((project) => (
                            <li key={project.id} className="project-card">
                                <h3>{project.title}</h3>
                                <p><strong>Description:</strong> {project.description}</p>
                                <p><strong>Category:</strong> {project.category}</p>
                                <p><strong>Budget:</strong> ${project.budget}</p>
                                <p><strong>Timeline:</strong> {project.timeline}</p>
                                <p><strong>Goals:</strong> {project.goals}</p>
                                <p><strong>Status:</strong> {project.status}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CSRManagement;
