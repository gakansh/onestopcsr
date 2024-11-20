import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Aboutus from './pages/Dashboard';
import ProjectList from './pages/ProjectList';
import Navbar from './components/Navbar';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './LoginAlready/Dashboard';
import CSRManagement from './LoginAlready/CSRManagement'; // Adjust the path accordingly




function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/csr-management" element={<CSRManagement />} />
            </Routes>
        </Router>
    );
}

export default App;
