const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

// Use Render's assigned port or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Render is working!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
