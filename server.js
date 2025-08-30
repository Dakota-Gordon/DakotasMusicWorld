// Simple static server for the /live directory
// Usage: node server.js

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve all static files from the project root
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}/`);
  console.log(`Serving files from: ${LIVE_DIR}`);
});
