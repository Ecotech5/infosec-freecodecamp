const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`ECOTECH started on port ${PORT}`);
});