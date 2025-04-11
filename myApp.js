// server.js
const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcryptjs'); // Added for password hashing

const app = express();

// Hide "X-Powered-By: Express" header for security
app.use(helmet.hidePoweredBy());

// Simple route to test server
app.get('/', (req, res) => {
  res.send('Hello from your secure Express app!');
});

// Use environment port (for deployment) or default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
