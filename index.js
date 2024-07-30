// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
// require('dotenv').config();
// Create an instance of the express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
