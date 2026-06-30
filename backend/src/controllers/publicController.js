import Contact from '../models/Contact.js';
import NewsEvent from '../models/NewsEvent.js';
import Partner from '../models/Partner.js';
import Project from '../models/Project.js';
import SiteSetting from '../models/SiteSetting.js';

export async function getSite(req, res) {
  const site = await SiteSetting.findOne().sort({ createdAt: -1 });
  res.json(site);
}

export async function getProjects(req, res) {
  const projects = await Project.find({ featured: true }).sort({ createdAt: -1 });
  res.json(projects);
}

export async function getProject(req, res) {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.json(project);
}

export async function getNewsEvents(req, res) {
  const newsEvents = await NewsEvent.find({ published: true }).sort({ eventDate: -1 });
  res.json(newsEvents);
}

export async function getNewsEvent(req, res) {
  const newsEvent = await NewsEvent.findOne({ _id: req.params.id, published: true });

  if (!newsEvent) {
    return res.status(404).json({ message: 'News event not found' });
  }

  res.json(newsEvent);
}

export async function getPartners(req, res) {
  const partners = await Partner.find({ active: true }).sort({ createdAt: -1 });
  res.json(partners);
}

export async function createContact(req, res) {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email and message are required' });
  }

  const contact = await Contact.create({ name, email, phone, message });
  res.status(201).json(contact);
}
