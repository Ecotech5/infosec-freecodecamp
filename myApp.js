const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

const app = express();

// ✅ Mount helmet.hidePoweredBy() FIRST
app.use(helmet.hidePoweredBy());

// ✅ Additional helmet configuration (if required by FCC)
app.use(
  helmet({
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

// ✅ API routes (load after helmet & static)
const api = require('./server.js');
app.use('/_api', api);

// ✅ Basic route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// ✅ Start the server
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

module.exports = app;
