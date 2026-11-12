import mongoose from 'mongoose';

const interestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  interest: { type: String, required: true },
  message: String,
  status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' }
}, { timestamps: true });

export const Interest = mongoose.model('Interest', interestSchema);
