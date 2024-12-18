const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// Enable CORS to allow requests from the front-end
app.use(cors());

// Middleware to log incoming requests
app.use((req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] Incoming request: ${req.method} ${req.url}`);
  next();
});

// Define a simple API endpoint
app.get('/', (req, res) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] Responding to root endpoint`);
  res.json({ message: 'Hello from the ECS Fargate backend Final-Imaops!' });
});

// Start the server
app.listen(PORT, () => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] Server is running on http://localhost:${PORT}`);
});
