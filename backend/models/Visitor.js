import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema(
  {
    page: { type: String, default: '/' },
    userAgent: { type: String },
    ipAddress: { type: String },
    referrer: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Visitor', visitorSchema);
