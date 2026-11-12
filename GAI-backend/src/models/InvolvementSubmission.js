import mongoose from 'mongoose';

const involvementSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  interest: { type: String, required: true, enum: ['partner', 'support', 'volunteer', 'collaborate'] },
  message: String,
  status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' }
}, { timestamps: { createdAt: 'created_at', updatedAt: false } });

export const InvolvementSubmission = mongoose.model('InvolvementSubmission', involvementSubmissionSchema);