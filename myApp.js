const express = require('express');
const helmet = require('helmet'); // Require Helmet

const app = express();

// Use Helmet for security (older versions require this syntax)
app.use(helmet());

// Export the app
module.exports = app;

