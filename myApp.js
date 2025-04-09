const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();

// Use Helmet to hide the X-Powered-By header explicitly
app.use(helmet.hidePoweredBy());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
