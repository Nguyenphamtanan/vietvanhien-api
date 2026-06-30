import Contact from '../models/Contact.js';
import NewsEvent from '../models/NewsEvent.js';
import Partner from '../models/Partner.js';
import Project from '../models/Project.js';
import SiteSetting from '../models/SiteSetting.js';

const models = {
  projects: Project,
  newsEvents: NewsEvent,
  partners: Partner
};

function resourcePayload(resource, req) {
  const payload = { ...req.body };

  if (req.file) {
    payload[resource === 'partners' ? 'logo' : 'image'] = `/uploads/${req.file.filename}`;
  }

  return payload;
}

export async function getDashboard(req, res) {
  const [projects, newsEvents, partners, contacts, newContacts] = await Promise.all([
    Project.countDocuments(),
    NewsEvent.countDocuments(),
    Partner.countDocuments(),
    Contact.countDocuments(),
    Contact.countDocuments({ status: 'new' })
  ]);

  res.json({ projects, newsEvents, partners, contacts, newContacts });
}

export async function updateSite(req, res) {
  const existing = await SiteSetting.findOne().sort({ createdAt: -1 });
  const site = existing
    ? await SiteSetting.findByIdAndUpdate(existing._id, req.body, { new: true, runValidators: true })
    : await SiteSetting.create(req.body);

  res.json(site);
}

export function listResource(resource) {
  return async (req, res) => {
    const docs = await models[resource].find().sort({ createdAt: -1 });
    res.json(docs);
  };
}

export function createResource(resource) {
  return async (req, res) => {
    const doc = await models[resource].create(resourcePayload(resource, req));
    res.status(201).json(doc);
  };
}

export function updateResource(resource) {
  return async (req, res) => {
    const doc = await models[resource].findByIdAndUpdate(req.params.id, resourcePayload(resource, req), {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.json(doc);
  };
}

export function deleteResource(resource) {
  return async (req, res) => {
    const doc = await models[resource].findByIdAndDelete(req.params.id);

    if (!doc) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.json({ message: 'Deleted' });
  };
}

export async function listContacts(req, res) {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
}

export async function updateContact(req, res) {
  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );

  if (!contact) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json(contact);
}
