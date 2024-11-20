const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // Import uuid

const app = express();
const PORT = 3001;
const DB_PATH = './db.json';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Utility to read the database
const readDatabase = () => {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading the database:', error);
        return { users: [], projects: [] }; // Ensure both keys are initialized
    }
};

// Utility to write to the database
const writeDatabase = (data) => {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing to the database:', error);
    }
};

// Signup Endpoint
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const db = readDatabase();
    const userExists = db.users.some((user) => user.email === email);

    if (userExists) {
        return res.status(400).json({ message: 'Email already registered.' });
    }

    const newUser = { id: uuidv4(), username, email, password }; // Generate unique user ID
    db.users.push(newUser);
    writeDatabase(db);

    res.status(201).json({ message: 'Signup successful.', user: newUser });
});

// Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const db = readDatabase();
    const user = db.users.find((user) => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' });
    }

    res.status(200).json({ message: 'Login successful.', user });
});

// Endpoint to add a new project
app.post('/projects', (req, res) => {
    const { title, description, category, budget, timeline, goals, status } = req.body;

    if (!title || !description || !category || !budget || !timeline || !goals || !status) {
        return res.status(400).json({ message: 'All project fields are required.' });
    }

    const db = readDatabase();
    const newProject = { id: uuidv4(), title, description, category, budget, timeline, goals, status }; // Generate unique project ID

    db.projects.push(newProject);
    writeDatabase(db);

    res.status(201).json({ message: 'Project added successfully.', project: newProject });
});

// Endpoint to fetch all projects
app.get('/projects', (req, res) => {
    const db = readDatabase();
    res.status(200).json(db.projects);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
