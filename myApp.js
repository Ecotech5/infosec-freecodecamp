const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const app = express();

// Apply security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com'],
    }
  },
  // noCache is not a valid Helmet option in latest versions; remove or use `helmet.noCache()` separately if needed
}));

// Serve static files
app.use(express.static('public'));

// Import API routes (ensure this doesn't create a circular require)
const api = require('./server.js');
app.use('/_api', api);

// Route
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Start server
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🥦 Useful Programmer Info Security App Started on Port ${port}`);
});

// Export app (for testing purposes only, if needed)
module.exports = app;
