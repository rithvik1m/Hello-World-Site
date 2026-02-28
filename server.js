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
      <p>Rithvik1M is on a mission to get a Macbook M4 13' 2025 Macbook. He needs to earn $994 so that he can buy this Macbook<p>
      <ul>
          <li>Websites</li>
          <li>Photography Competitions</li>
          <li>Apps</li>
        <p> My mission this year is to get the Macbook no matter what...
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
