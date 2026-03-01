const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

console.log("Node is working");
console.log("=======================================");
console.log("🚀 Server is starting...");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')));
app.get('/goals', (req, res) => res.sendFile(path.join(__dirname, 'public', 'goals.html')));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("=======================================");
});