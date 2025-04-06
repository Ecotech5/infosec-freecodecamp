const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

const app = express();

// ✅ Proper Helmet configuration including hidePoweredBy
app.use(
  helmet({
    hidePoweredBy: true, // ✅ Included in single helmet() call
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'trusted-cdn.com'],
      },
    },
    noCache: true,
  })
);

// ✅ Serve static files
app.use(express.static('public'));

// ✅ API routes
const api = require('./server.js');
app.use('/_api', api);

// ✅ Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// ✅ Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

module.exports = app;
