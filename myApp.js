const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const app = express();

// ✅ Apply helmet and hide X-Powered-By header
app.use(helmet.hidePoweredBy());

// ✅ Apply other Helmet settings (like content security policy)
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

// ✅ Serve static files from 'public'
app.use(express.static('public'));

// ✅ Disable specific headers (this disables only the HSTS header)
app.disable('strict-transport-security');

// ✅ Route for API
const api = require('./server.js');
app.use('/_api', api);

// ✅ Route for homepage
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// ✅ Start the server
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`ECOTECH Info Security App Started on Port ${port}`);
});

module.exports = app;
