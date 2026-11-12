import { Router } from 'express';
import { Project } from '../models/Project.js';
import { News } from '../models/News.js';
import { Resource } from '../models/Resource.js';
import { Message } from '../models/Message.js';
import { Interest } from '../models/Interest.js';

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function clean(value) { return typeof value === 'string' ? value.trim() : ''; }

router.get('/projects', async (req, res, next) => {
  try {
    const rows = await Project.find().sort({ createdAt: -1 });
    res.json(rows);
  } catch (e) { next(e); }
});

router.get('/projects/:id', async (req, res, next) => {
  try {
    const key = req.params.id;
    const q = /^\d+$/.test(key) ? { _id: key } : { slug: key };
    const row = await Project.findOne(q);
    if (!row) return res.status(404).json({ message: 'Project not found.' });
    res.json(row);
  } catch (e) { next(e); }
});

router.get('/news', async (req, res, next) => {
  try {
    const rows = await News.find({ published: true }).sort({ published_at: -1, createdAt: -1 });
    res.json(rows);
  } catch (e) { next(e); }
});

router.get('/news/:id', async (req, res, next) => {
  try {
    const key = req.params.id;
    const q = /^\d+$/.test(key) ? { _id: key } : { slug: key };
    const row = await News.findOne(q);
    if (!row || !row.published) return res.status(404).json({ message: 'Article not found.' });
    res.json(row);
  } catch (e) { next(e); }
});

router.get('/resources', async (req, res, next) => {
  try {
    const rows = await Resource.find({ published: true }).sort({ createdAt: -1 });
    res.json(rows);
  } catch (e) { next(e); }
});

router.post('/contact', async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body || {};
    const errors = {};
    if (!clean(name)) errors.name = 'Name is required.';
    if (!EMAIL_RE.test(clean(email))) errors.email = 'A valid email address is required.';
    if (!clean(subject)) errors.subject = 'Subject is required.';
    if (clean(message).length < 10) errors.message = 'Message must be at least 10 characters.';
    if (Object.keys(errors).length) {
      return res.status(400).json({ message: Object.values(errors)[0], errors });
    }
    const doc = await Message.create({ name: clean(name), email: clean(email), phone: clean(phone), subject: clean(subject), message: clean(message) });
    res.status(201).json({ message: 'Message received successfully.', id: doc._id });
  } catch (e) { next(e); }
});

router.post('/involvement', async (req, res, next) => {
  try {
    const { name, email, interest, message } = req.body || {};
    const errors = {};
    if (!clean(name)) errors.name = 'Name is required.';
    if (!EMAIL_RE.test(clean(email))) errors.email = 'A valid email address is required.';
    if (!['partner', 'support', 'volunteer', 'collaborate'].includes(clean(interest))) {
      errors.interest = `Interest must be one of: partner, support, volunteer, collaborate.`;
    }
    if (Object.keys(errors).length) {
      return res.status(400).json({ message: Object.values(errors)[0], errors });
    }
    const doc = await Interest.create({ name: clean(name), email: clean(email), interest: clean(interest), message: clean(message) });
    res.status(201).json({ message: 'Interest submitted successfully.', id: doc._id });
  } catch (e) { next(e); }
});

export default router;
