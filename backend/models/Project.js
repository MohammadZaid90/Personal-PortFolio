import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    emoji: { type: String, default: '🚀' },
    bgGradient: {
      type: String,
      default: 'linear-gradient(135deg,rgba(108,99,255,0.15),rgba(56,189,248,0.08))',
    },
    tags: [{ type: String, trim: true }],
    githubUrl: { type: String, default: '' },
    liveUrl: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    category: {
      type: String,
      enum: ['ai', 'web', 'systems', 'cv', 'other'],
      default: 'other',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
