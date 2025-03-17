const express = require("express");

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Sample data
let users = [
  { id: 1, name: "Alice", age : 23 },
  { id: 2, name: "Bob", age : 25 }
];

// GET all users
app.get("/users", (req, res) => {
  //add delay
  res.json(users);
});

// GET single user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// POST: Add new user
// app.post("/users", (req, res) => {
//   const newUser = { id: users.length + 1, name: req.body.name, age:req.body.age };
//   users.push(newUser);
//   res.status(201).json(newUser);
//   console.log(users);
// });

// PUT: Update user
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  user.name = req.body.name;
  user.age = req.body.age;
  res.json(user);
});

// // DELETE user
// app.delete("/users/:id", (req, res) => {
//   users = users.filter((u) => u.id !== parseInt(req.params.id));
//   res.status(204).send();
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});