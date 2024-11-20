import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Bridging Corporations with Communities for a Better Tomorrow</h1>
                    <p>
                        Transforming Corporate Social Responsibility by connecting Corporates, NGOs, and Volunteers to create a meaningful impact.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/corporates" className="cta-btn">Explore CSR Projects</Link>
                        <Link to="/ngos" className="cta-btn">Join as a Partner</Link>
                        <Link to="/volunteers" className="cta-btn">Get Involved Now</Link>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="features-section">
                <h2>Our Key Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>CSR Project Management</h3>
                        <p>Manage, monitor, and report CSR projects seamlessly.</p>
                    </div>
                    <div className="feature-card">
                        <h3>NGO Partnership</h3>
                        <p>Collaborate with trusted NGOs to drive impactful initiatives.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Volunteer Engagement</h3>
                        <p>Empower volunteers with meaningful opportunities.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Impact Measurement</h3>
                        <p>Track the real-time impact of CSR projects with data-driven insights.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Compliance Tracking</h3>
                        <p>Stay compliant with CSR laws and regulations effortlessly.</p>
                    </div>
                </div>
            </section>

            {/* Current & Upcoming Projects */}
            <section className="projects-section">
                <h2>Current & Upcoming Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3>🌍 Clean Water Initiative</h3>
                        <p>Providing clean and safe drinking water to rural areas.</p>
                        <p><strong>Impact:</strong> 10,000 lives improved</p>
                    </div>
                    <div className="project-card">
                        <h3>🚀 Education for All</h3>
                        <p>Ensuring quality education for underprivileged children.</p>
                        <p><strong>Impact:</strong> 5,000 students reached</p>
                    </div>
                    <div className="project-card">
                        <h3>📅 Tree Plantation Drive</h3>
                        <p>Join us to plant 50,000 trees across cities.</p>
                        <p><strong>Launch:</strong> December 2024</p>
                    </div>
                    <div className="project-card">
                        <h3>🛠️ Health Awareness Camp</h3>
                        <p>Raising awareness on hygiene and healthcare practices.</p>
                        <p><strong>Launch:</strong> January 2025</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial">
                        <p>"OneStopCSR helped us streamline our CSR initiatives like never before!"</p>
                        <small>- A Leading Corporate</small>
                    </div>
                    <div className="testimonial">
                        <p>"Collaborating with companies has become effortless thanks to this platform."</p>
                        <small>- NGO Partner</small>
                    </div>
                    <div className="testimonial">
                        <p>"As a volunteer, I found meaningful opportunities that made a difference."</p>
                        <small>- Volunteer</small>
                    </div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="impact-metrics">
                <h2>Our Impact</h2>
                <div className="metrics-grid">
                    <div className="metric-card">
                        <h3>100+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="metric-card">
                        <h3>5000+</h3>
                        <p>Volunteers Engaged</p>
                    </div>
                    <div className="metric-card">
                        <h3>10M+</h3>
                        <p>Lives Impacted</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/faqs">FAQs</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
                <div className="contact-info">
                    <p>Email: support@onestopcsr.com</p>
                    <p>Phone: +91 9876543210</p>
                </div>
                <div className="social-media">
                    <a href="#facebook">Facebook</a>
                    <a href="#linkedin">LinkedIn</a>
                    <a href="#twitter">Twitter</a>
                    <a href="#instagram">Instagram</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
