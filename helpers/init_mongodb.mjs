import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// MongoDB connection URL
const mongoURI = process.env.MONGODB_URI;

// Establish the connection
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Handle specific error conditions as needed
  }
};

// Handling connection events
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB'); 

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Gracefully close the connection when the application exits
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection is disconnected due to application termination');
    process.exit(0);
  });
});

export default connectDB;
