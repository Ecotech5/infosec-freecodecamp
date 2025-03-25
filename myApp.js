const express = require('express');
const app = express();
const helmet = require("helmet");

// Middleware setup
app.use(helmet()); //  Use helmet function
app.use(express.json()); // Enable JSON parsing
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded data parsing

// to check if the server is running
app.get("/", (req, res) => {
    res.send("Hello, your server is running!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
