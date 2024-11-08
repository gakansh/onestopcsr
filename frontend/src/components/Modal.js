import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{project.name}</h2>
                <p><strong>Organization:</strong> {project.organization}</p>
                <p>{project.description}</p>
                <p>{project.caseStudy}</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
