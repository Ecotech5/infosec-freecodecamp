const express = require('express');
const helmet = require('helmet');

const app = express();

// ✅ Mount helmet.hidePoweredBy middleware FIRST
app.use(helmet.hidePoweredBy());

// ✅ You can add more helmet config here if needed for later challenges

module.exports = app;
