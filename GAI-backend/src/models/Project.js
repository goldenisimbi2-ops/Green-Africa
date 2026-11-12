import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  location: String,
  category: String,
  status: String,
  image_url: String,
  alt_text: String,
  overview: String,
  objectives: { type: mongoose.Schema.Types.Mixed, default: [] },
  activities: { type: mongoose.Schema.Types.Mixed, default: [] },
  community: String,
  impact: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export const Project = mongoose.model('Project', projectSchema);