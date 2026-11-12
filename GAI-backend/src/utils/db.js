import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ quiet: true });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/gai_database';

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected.');
  } catch (e) {
    console.error('MongoDB connection failed:', e.message);
    throw e;
  }
}

export async function testDb() {
  if (mongoose.connection.readyState !== 1) throw new Error('Not connected');
  await mongoose.connection.db.admin().ping();
}

export default { connectDB, testDb };