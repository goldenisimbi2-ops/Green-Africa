import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'read', 'replied', 'archived'], default: 'new' }
}, { timestamps: { createdAt: 'created_at', updatedAt: false } });

export const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);