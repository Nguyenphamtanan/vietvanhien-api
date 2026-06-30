export type SiteSetting = {
  _id?: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroVideo: string;
  aboutTitle: string;
  aboutContent: string;
  vision: string;
  mission: string;
  activityFields: { title: string; description: string }[];
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
};

export type Project = {
  _id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  year: string;
  status: 'planning' | 'active' | 'completed';
  featured: boolean;
};

export type NewsEvent = {
  _id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  eventDate: string;
  type: 'news' | 'event';
  published: boolean;
};

export type Partner = {
  _id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  active: boolean;
};

export type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'processing' | 'completed';
  createdAt: string;
};
