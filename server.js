const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// Enable CORS to allow requests from the front-end
app.use(cors({
  origin: 'https://d301jqwfg3cytj.cloudfront.net/', // Replace with your CloudFront domain
  methods: ['GET', 'POST'], // Specify allowed HTTP methods
  credentials: true // Allow cookies if needed
}));

// Define a simple API endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the ECS Fargate backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
