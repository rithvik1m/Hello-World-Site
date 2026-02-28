const express = require('express');
const app = express();
const PORT = 3000;

console.log('Node is working'); // <-- verify Node started

// Serve static files from the "public" folder
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.send(`
    <div style="text-align: center; font-family: Arial, sans-serif;">
      <h1>Hello World 🌎 This is Rithvik1M</h1>
      <img src="/myphoto.jpg" alt="My Cool Photo" width="400" 
           style="border-radius: 10px; margin-top: 20px;">
    </div>
  `);
});
//redeploy trigger
// Start server
app.listen(PORT, () => {
  console.log("=======================================");
  console.log("🚀 Server is starting...");
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("=======================================");
});
