// Import required packages
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();

// Use Helmet to secure HTTP headers
app.use(helmet());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route to render the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Add additional routes or API routes as needed
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Set up the port dynamically for Render
const port = process.env.PORT || 3000;

// Start the server on the specified port
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

module.exports = app;
