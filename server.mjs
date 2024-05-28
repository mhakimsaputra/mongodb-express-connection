// Import required packages
import express from "express";

import connectDB from './helpers/init_mongodb.mjs';

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Define routes and middleware here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
