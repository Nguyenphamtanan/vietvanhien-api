import mongoose from 'mongoose';

const newsEventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    summary: { type: String, required: true },
    content: { type: String, default: '' },
    image: { type: String, default: '' },
    eventDate: { type: Date, default: Date.now },
    type: { type: String, enum: ['news', 'event'], default: 'news' },
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model('NewsEvent', newsEventSchema);
