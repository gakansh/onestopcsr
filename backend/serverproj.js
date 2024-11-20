const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3001;
const DB_PATH = './db.json';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Utility to read and write the database
const readDatabase = () => {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading database:', error);
        return { projects: [] };
    }
};

const writeDatabase = (data) => {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing database:', error);
    }
};

// Endpoint to add a new project
app.post('/projects', (req, res) => {
    const db = readDatabase();
    const newProject = { id: Date.now(), ...req.body };

    db.projects.push(newProject);
    writeDatabase(db);

    res.status(201).json({ message: 'Project added successfully', project: newProject });
});

// Endpoint to fetch all projects
app.get('/projects', (req, res) => {
    const db = readDatabase();
    res.status(200).json(db.projects);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
