const express = require('express');
const helmet = require('helmet'); // Require Helmet

const app = express();

// Use Helmet for security
app.use(helmet());

module.exports = app;
