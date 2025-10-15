// 1️⃣ Import Express
const express = require('express');

// 2️⃣ Create an Express app
const app = express();

// 3️⃣ Middleware to parse JSON (very important!)
app.use(express.json());

// 4️⃣ Dummy data
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// 5️⃣ GET route — send data as JSON
app.get('/users', (req, res) => {
  res.json(users); // Sends the users array as JSON
});

// 6️⃣ POST route — receive JSON data
app.post('/users', (req, res) => {
  const newUser = req.body; // Reads the JSON body from the request

  // Add an ID and save it
  newUser.id = users.length + 1;
  users.push(newUser);

  res.status(201).json({
    message: 'User created successfully!',
    user: newUser
  });
});

// 7️⃣ Start the server
app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
