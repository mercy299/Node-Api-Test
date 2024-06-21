const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Sample route to get user data
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Annie' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Gon' },
  ];
  res.json(users);
});

// Sample route to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now(); // Generate a simple unique ID
  res.status(201).json(newUser); // Respond with the newly created user
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
