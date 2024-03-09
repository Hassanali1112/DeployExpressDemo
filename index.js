// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a route for GET requests
app.get('/', (req, res) => {
    // Send response with "Hy" message
    res.send('Hy From Server');
});

// Starting the server
const port = 5000; // You can use any port you prefer
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
