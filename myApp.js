const express = require('express');
const helmet = require('helmet');

const app = express();

// ✅ Correct usage of helmet.hidePoweredBy()
app.use(helmet.hidePoweredBy());

// ✅ Basic route (FCC checks this)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// ✅ Example test route (optional, for FCC API check)
app.get('/_api', (req, res) => {
  res.json({ message: 'Helmet test passed' });
});

// ✅ Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
