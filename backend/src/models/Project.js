import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, default: '' },
    location: { type: String, default: '' },
    year: { type: String, default: '' },
    status: { type: String, enum: ['planning', 'active', 'completed'], default: 'active' },
    featured: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
