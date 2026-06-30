import mongoose from 'mongoose';

const siteSettingSchema = new mongoose.Schema(
  {
    heroTitle: { type: String, default: '' },
    heroSubtitle: { type: String, default: '' },
    heroImage: { type: String, default: '' },
    heroVideo: { type: String, default: '' },
    aboutTitle: { type: String, default: '' },
    aboutContent: { type: String, default: '' },
    vision: { type: String, default: '' },
    mission: { type: String, default: '' },
    activityFields: [{ title: String, description: String }],
    contactEmail: { type: String, default: '' },
    contactPhone: { type: String, default: '' },
    contactAddress: { type: String, default: '' }
  },
  { timestamps: true }
);

export default mongoose.model('SiteSetting', siteSettingSchema);
