import React, { useState } from 'react';
import Modal from '../components/Modal';
import './ProjectList.css';

const ProjectList = () => {
    // Dummy project data with case studies
    const projects = [
        {
            id: 1,
            name: 'Clean Water Initiative',
            description: 'Providing access to clean drinking water in rural areas.',
            organization: 'WaterAid',
            caseStudy: 'This project provided clean water to 5,000 families in rural India, reducing waterborne diseases by 30%.',
        },
        {
            id: 2,
            name: 'Tree Plantation Drive',
            description: 'Planting trees to combat climate change and improve air quality.',
            organization: 'Green Earth Foundation',
            caseStudy: 'Over 10,000 trees were planted, resulting in a 5% increase in green cover in the area.',
        },
        {
            id: 3,
            name: 'Digital Literacy Program',
            description: 'Empowering underprivileged children with basic computer skills.',
            organization: 'EduTech',
            caseStudy: 'Trained over 1,000 students, improving their chances of employability by 20%.',
        },
        {
            id: 4,
            name: 'Women Empowerment Workshop',
            description: 'Workshops to help women learn new skills and gain financial independence.',
            organization: 'EmpowerHer NGO',
            caseStudy: 'Enabled 500 women to start small businesses and achieve financial independence.',
        },
        {
            id: 5,
            name: 'Community Health Camp',
            description: 'Free health checkups and medical support for rural communities.',
            organization: 'HealthFirst',
            caseStudy: 'Provided free medical checkups to 2,000 people, reducing health issues by 15%.',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="project-list-container">
            <h2>Explore Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p><strong>Organization:</strong> {project.organization}</p>
                        <button className="project-button" onClick={() => openModal(project)}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for viewing project details */}
            <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
        </div>
    );
};

export default ProjectList;
