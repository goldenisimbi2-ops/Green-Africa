import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  date_label: String,
  category: String,
  author: String,
  title: { type: String, required: true },
  image_url: String,
  alt_text: String,
  excerpt: String,
  body: { type: mongoose.Schema.Types.Mixed, default: [] },
  pdf_url: String,
  published: { type: Boolean, default: true },
  published_at: { type: Date, default: null }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export const News = mongoose.model('News', newsSchema);