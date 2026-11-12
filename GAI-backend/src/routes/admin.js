import { Router } from 'express';
import { Project } from '../models/Project.js';
import { News } from '../models/News.js';
import { Resource } from '../models/Resource.js';
import { Message } from '../models/Message.js';
import { Interest } from '../models/Interest.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

const router = Router();
router.use(requireAuth, requireAdmin);

function badRequest(res, errors) {
  return res.status(400).json({ message: Object.values(errors)[0], errors });
}

router.get('/dashboard', async (req, res, next) => {
  try {
    const [projects, news, newMessages, newInterests] = await Promise.all([
      Project.countDocuments(),
      News.countDocuments(),
      Message.countDocuments({ status: 'new' }),
      Interest.countDocuments({ status: 'new' })
    ]);
    res.json({ projects, news, newMessages, newInterests });
  } catch (e) { next(e); }
});

function crud(Model) {
  router.get(`/${Model.modelName.toLowerCase()}s`.replace('newss', 'news'), async (req, res, next) => {
    try {
      const rows = await Model.find().sort({ createdAt: -1 });
      res.json(rows);
    } catch (e) { next(e); }
  });
}

// Projects
router.get('/projects', async (req, res, next) => {
  try { res.json(await Project.find().sort({ createdAt: -1 })); } catch (e) { next(e); }
});
router.get('/projects/:id', async (req, res, next) => {
  try {
    const key = req.params.id;
    const q = /^[0-9a-fA-F]{24}$/.test(key) ? { _id: key } : { slug: key };
    const row = await Project.findOne(q);
    if (!row) return res.status(404).json({ message: 'Record not found.' });
    res.json(row);
  } catch (e) { next(e); }
});
router.post('/projects', async (req, res, next) => {
  try {
    const b = req.body || {};
    if (!b.title) return res.status(400).json({ message: 'title is required.' });
    const slug = b.slug || String(b.title).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 180);
    const doc = await Project.create({
      slug, title: b.title, location: b.location, category: b.category, status: b.status,
      image_url: b.image_url, alt_text: b.alt_text, overview: b.overview,
      objectives: b.objectives || [], activities: b.activities || [],
      community: b.community, impact: b.impact
    });
    res.status(201).json(doc);
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ message: 'A record with that slug already exists.' });
    next(e);
  }
});
router.put('/projects/:id', async (req, res, next) => { await updateProject(req, res, next); });
router.patch('/projects/:id', async (req, res, next) => { await updateProject(req, res, next); });
async function updateProject(req, res, next) {
  try {
    const key = req.params.id;
    const q = /^[0-9a-fA-F]{24}$/.test(key) ? { _id: key } : { slug: key };
    const existing = await Project.findOne(q);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    const b = req.body || {};
    const fields = ['slug','title','location','category','status','image_url','alt_text','overview','objectives','activities','community','impact'];
    for (const f of fields) if (b[f] !== undefined) existing[f] = b[f];
    await existing.save();
    res.json(existing);
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ message: 'A record with that slug already exists.' });
    next(e);
  }
}
router.delete('/projects/:id', async (req, res, next) => {
  try {
    const key = req.params.id;
    const q = /^[0-9a-fA-F]{24}$/.test(key) ? { _id: key } : { slug: key };
    const existing = await Project.findOne(q);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    await existing.deleteOne();
    res.json({ message: 'Deleted successfully.' });
  } catch (e) { next(e); }
});

// News
router.get('/news', async (req, res, next) => {
  try { res.json(await News.find().sort({ createdAt: -1 })); } catch (e) { next(e); }
});
router.get('/news/:id', async (req, res, next) => {
  try {
    const key = req.params.id;
    const q = /^[0-9a-fA-F]{24}$/.test(key) ? { _id: key } : { slug: key };
    const row = await News.findOne(q);
    if (!row) return res.status(404).json({ message: 'Record not found.' });
    res.json(row);
  } catch (e) { next(e); }
});
router.post('/news', async (req, res, next) => {
  try {
    const b = req.body || {};
    if (!b.title) return res.status(400).json({ message: 'title is required.' });
    const slug = b.slug || String(b.title).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 180);
    const doc = await News.create({
      slug, title: b.title, date_label: b.date_label, category: b.category, author: b.author,
      image_url: b.image_url, alt_text: b.alt_text, excerpt: b.excerpt, body: b.body || [],
      pdf_url: b.pdf_url, published: b.published !== undefined ? b.published : true, published_at: b.published_at
    });
    res.status(201).json(doc);
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ message: 'A record with that slug already exists.' });
    next(e);
  }
});
router.put('/news/:id', async (req, res, next) => { await updateNews(req, res, next); });
router.patch('/news/:id', async (req, res, next) => { await updateNews(req, res, next); });
async function updateNews(req, res, next) {
  try {
    const key = req.params.id;
    const q = /^[0-9a-fA-F]{24}$/.test(key) ? { _id: key } : { slug: key };
    const existing = await News.findOne(q);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    const b = req.body || {};
    const fields = ['slug','title','date_label','category','author','image_url','alt_text','excerpt','body','pdf_url','published','published_at'];
    for (const f of fields) if (b[f] !== undefined) existing[f] = b[f];
    await existing.save();
    res.json(existing);
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ message: 'A record with that slug already exists.' });
    next(e);
  }
}
router.delete('/news/:id', async (req, res, next) => {
  try {
    const key = req.params.id;
    const q = /^[0-9a-fA-F]{24}$/.test(key) ? { _id: key } : { slug: key };
    const existing = await News.findOne(q);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    await existing.deleteOne();
    res.json({ message: 'Deleted successfully.' });
  } catch (e) { next(e); }
});

// Resources
router.get('/resources', async (req, res, next) => {
  try { res.json(await Resource.find().sort({ createdAt: -1 })); } catch (e) { next(e); }
});
router.get('/resources/:id', async (req, res, next) => {
  try {
    const row = await Resource.findById(req.params.id);
    if (!row) return res.status(404).json({ message: 'Record not found.' });
    res.json(row);
  } catch (e) { next(e); }
});
router.post('/resources', async (req, res, next) => {
  try {
    const b = req.body || {};
    if (!b.title) return res.status(400).json({ message: 'title is required.' });
    const doc = await Resource.create({ category: b.category, title: b.title, description: b.description, file_url: b.file_url, published: b.published !== undefined ? b.published : true });
    res.status(201).json(doc);
  } catch (e) { next(e); }
});
router.put('/resources/:id', async (req, res, next) => { await updateResource(req, res, next); });
router.patch('/resources/:id', async (req, res, next) => { await updateResource(req, res, next); });
async function updateResource(req, res, next) {
  try {
    const existing = await Resource.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    const b = req.body || {};
    const fields = ['category','title','description','file_url','published'];
    for (const f of fields) if (b[f] !== undefined) existing[f] = b[f];
    await existing.save();
    res.json(existing);
  } catch (e) { next(e); }
}
router.delete('/resources/:id', async (req, res, next) => {
  try {
    const existing = await Resource.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    await existing.deleteOne();
    res.json({ message: 'Deleted successfully.' });
  } catch (e) { next(e); }
});

// Messages
router.get('/messages', async (req, res, next) => {
  try { res.json(await Message.find().sort({ createdAt: -1 })); } catch (e) { next(e); }
});
router.patch('/messages/:id', async (req, res, next) => {
  try {
    const { status } = req.body || {};
    if (!['new','read','replied','archived'].includes(status)) {
      return res.status(400).json({ message: `Status must be one of: new, read, replied, archived.` });
    }
    const existing = await Message.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    existing.status = status;
    await existing.save();
    res.json(existing);
  } catch (e) { next(e); }
});
router.delete('/messages/:id', async (req, res, next) => {
  try {
    const existing = await Message.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    await existing.deleteOne();
    res.json({ message: 'Deleted successfully.' });
  } catch (e) { next(e); }
});

// Interests
router.get('/interests', async (req, res, next) => {
  try { res.json(await Interest.find().sort({ createdAt: -1 })); } catch (e) { next(e); }
});
router.patch('/interests/:id', async (req, res, next) => {
  try {
    const { status } = req.body || {};
    if (!['new','contacted','closed'].includes(status)) {
      return res.status(400).json({ message: `Status must be one of: new, contacted, closed.` });
    }
    const existing = await Interest.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    existing.status = status;
    await existing.save();
    res.json(existing);
  } catch (e) { next(e); }
});
router.delete('/interests/:id', async (req, res, next) => {
  try {
    const existing = await Interest.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Record not found.' });
    await existing.deleteOne();
    res.json({ message: 'Deleted successfully.' });
  } catch (e) { next(e); }
});

export default router;
