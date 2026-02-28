// ...existing code...
const express = require('express');
const app = express();
const PORT = 3000;

console.log('Node is working'); // <-- add this to verify Node started

// When someone visits the homepage
app.get('/', (req, res) => {
  res.send('<h1>Hello World 🌎</h1>');
});

// Start server
app.listen(PORT, () => {
  console.log("=======================================");
  console.log("🚀 Server is starting...");
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("=======================================");
});