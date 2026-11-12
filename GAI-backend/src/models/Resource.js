import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  category: String,
  title: { type: String, required: true },
  description: String,
  file_url: String,
  published: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: false } });

export const Resource = mongoose.model('Resource', resourceSchema);