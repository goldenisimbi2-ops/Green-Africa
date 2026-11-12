import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function call(path, opts = {}) {
  const token = localStorage.getItem('gai_token');
  const r = await fetch(API + path, {
    ...opts,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.message || 'Failed');
  return d;
}

const emptyProject = { title: '', slug: '', location: '', category: '', status: '', image_url: '', alt_text: '', overview: '', objectives: '', activities: '', community: '', impact: '' };
const emptyNews = { title: '', slug: '', date_label: '', category: '', author: '', image_url: '', alt_text: '', excerpt: '', body: '', pdf_url: '', published: true };
const emptyResource = { title: '', category: '', description: '', file_url: '', published: true };

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState(null);
  const [projects, setProjects] = useState([]);
  const [news, setNews] = useState([]);
  const [resources, setResources] = useState([]);
  const [messages, setMessages] = useState([]);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modal, setModal] = useState(null); // { type, mode, data }
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);

  const reload = async () => {
    const [s, p, n, r, m, i] = await Promise.all([
      call('/admin/dashboard'),
      call('/admin/projects'),
      call('/admin/news'),
      call('/admin/resources'),
      call('/admin/messages'),
      call('/admin/interests'),
    ]);
    setStats(s); setProjects(p); setNews(n); setResources(r); setMessages(m); setInterests(i);
  };

  useEffect(() => {
    reload().catch(() => (location.href = '/admin-login')).finally(() => setLoading(false));
  }, []);

  const handleDelete = async (type, id) => {
    if (!confirm('Are you sure?')) return;
    try {
      await call(`/admin/${type}/${id}`, { method: 'DELETE' });
      await reload();
    } catch (e) { alert(e.message); }
  };

  const updateStatus = async (type, id, status) => {
    try {
      await call(`/admin/${type}/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) });
      await reload();
    } catch (e) { alert(e.message); }
  };

  const openCreate = (type) => {
    const defaults = type === 'projects' ? emptyProject : type === 'news' ? emptyNews : emptyResource;
    setForm({ ...defaults });
    setModal({ type, mode: 'create' });
  };

  const openEdit = (type, item) => {
    if (type === 'projects') {
      setForm({
        ...emptyProject, ...item,
        objectives: Array.isArray(item.objectives) ? item.objectives.join('\n') : (item.objectives || ''),
        activities: Array.isArray(item.activities) ? item.activities.join('\n') : (item.activities || ''),
      });
    } else if (type === 'news') {
      setForm({
        ...emptyNews, ...item,
        body: Array.isArray(item.body) ? item.body.join('\n') : (item.body || ''),
      });
    } else {
      setForm({ ...emptyResource, ...item });
    }
    setModal({ type, mode: 'edit', id: item._id || item.id });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const { type, mode, id } = modal;
      let payload = { ...form };
      if (type === 'projects') {
        payload.objectives = (payload.objectives || '').split('\n').map(s => s.trim()).filter(Boolean);
        payload.activities = (payload.activities || '').split('\n').map(s => s.trim()).filter(Boolean);
      }
      if (type === 'news') {
        payload.body = (payload.body || '').split('\n').map(s => s.trim()).filter(Boolean);
      }
      if (mode === 'create') {
        await call(`/admin/${type}`, { method: 'POST', body: JSON.stringify(payload) });
      } else {
        await call(`/admin/${type}/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
      }
      setModal(null);
      await reload();
    } catch (e) { alert(e.message); }
    finally { setSaving(false); }
  };

  if (loading) return <div style={{ padding: 40 }}>Loading admin dashboard...</div>;

  const tabs = ['dashboard', 'projects', 'news', 'resources', 'messages', 'interests'];

  return (
    <div style={{ padding: '100px 5% 60px', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
        <h1>GAI Admin Dashboard</h1>
        <button onClick={() => { localStorage.removeItem('gai_token'); location.href = '/admin-login'; }} style={{ padding: '10px 20px' }}>Logout</button>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 30, flexWrap: 'wrap' }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setActiveTab(t)} style={{ padding: '10px 20px', background: activeTab === t ? '#2d5f3b' : '#f5f5f5', color: activeTab === t ? 'white' : 'black', border: 'none', borderRadius: 5, cursor: 'pointer', textTransform: 'capitalize' }}>{t}</button>
        ))}
      </div>

      {activeTab === 'dashboard' && stats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20, marginBottom: 40 }}>
          {Object.entries(stats).map(([k, v]) => (
            <div key={k} style={{ padding: 25, background: 'white', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ textTransform: 'capitalize', margin: 0 }}>{k.replace(/([A-Z])/g, ' $1')}</h3>
              <strong style={{ fontSize: 32, color: '#2d5f3b' }}>{v}</strong>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'projects' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <h2>Projects ({projects.length})</h2>
            <button onClick={() => openCreate('projects')} style={{ padding: '8px 16px', background: '#2d5f3b', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>+ New Project</button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', background: 'white', borderRadius: 8, overflow: 'hidden' }}>
              <thead style={{ background: '#f5f5f5' }}>
                <tr><th style={{ padding: 15, textAlign: 'left' }}>Title</th><th style={{ padding: 15, textAlign: 'left' }}>Category</th><th style={{ padding: 15, textAlign: 'left' }}>Location</th><th style={{ padding: 15 }}>Actions</th></tr>
              </thead>
              <tbody>
                {projects.map(p => (
                  <tr key={p._id || p.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: 15 }}>{p.title}</td>
                    <td style={{ padding: 15 }}>{p.category}</td>
                    <td style={{ padding: 15 }}>{p.location}</td>
                    <td style={{ padding: 15, textAlign: 'center', display: 'flex', gap: 8, justifyContent: 'center' }}>
                      <button onClick={() => openEdit('projects', p)} style={{ padding: '5px 12px', background: '#007bff', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleDelete('projects', p._id || p.id)} style={{ padding: '5px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'news' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <h2>News Articles ({news.length})</h2>
            <button onClick={() => openCreate('news')} style={{ padding: '8px 16px', background: '#2d5f3b', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>+ New Article</button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', background: 'white', borderRadius: 8, overflow: 'hidden' }}>
              <thead style={{ background: '#f5f5f5' }}>
                <tr><th style={{ padding: 15, textAlign: 'left' }}>Title</th><th style={{ padding: 15, textAlign: 'left' }}>Category</th><th style={{ padding: 15, textAlign: 'left' }}>Date</th><th style={{ padding: 15 }}>Actions</th></tr>
              </thead>
              <tbody>
                {news.map(n => (
                  <tr key={n._id || n.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: 15 }}>{n.title}</td>
                    <td style={{ padding: 15 }}>{n.category}</td>
                    <td style={{ padding: 15 }}>{n.date_label}</td>
                    <td style={{ padding: 15, textAlign: 'center', display: 'flex', gap: 8, justifyContent: 'center' }}>
                      <button onClick={() => openEdit('news', n)} style={{ padding: '5px 12px', background: '#007bff', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleDelete('news', n._id || n.id)} style={{ padding: '5px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <h2>Resources ({resources.length})</h2>
            <button onClick={() => openCreate('resources')} style={{ padding: '8px 16px', background: '#2d5f3b', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>+ New Resource</button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', background: 'white', borderRadius: 8, overflow: 'hidden' }}>
              <thead style={{ background: '#f5f5f5' }}>
                <tr><th style={{ padding: 15, textAlign: 'left' }}>Title</th><th style={{ padding: 15, textAlign: 'left' }}>Category</th><th style={{ padding: 15 }}>Actions</th></tr>
              </thead>
              <tbody>
                {resources.map(r => (
                  <tr key={r._id || r.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: 15 }}>{r.title}</td>
                    <td style={{ padding: 15 }}>{r.category}</td>
                    <td style={{ padding: 15, textAlign: 'center', display: 'flex', gap: 8, justifyContent: 'center' }}>
                      <button onClick={() => openEdit('resources', r)} style={{ padding: '5px 12px', background: '#007bff', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleDelete('resources', r._id || r.id)} style={{ padding: '5px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'messages' && (
        <div>
          <h2>Contact Messages ({messages.length})</h2>
          {messages.map(m => (
            <div key={m._id || m.id} style={{ background: 'white', padding: 25, margin: '15px 0', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <div><b>{m.name}</b> — {m.email} {m.phone && `| ${m.phone}`}</div>
                <span style={{ padding: '5px 10px', background: m.status === 'new' ? '#ffc107' : m.status === 'replied' ? '#28a745' : '#6c757d', color: 'white', borderRadius: 4 }}>{m.status}</span>
              </div>
              <h4 style={{ margin: '10px 0' }}>{m.subject}</h4>
              <p style={{ margin: '10px 0', lineHeight: 1.6 }}>{m.message}</p>
              <div style={{ display: 'flex', gap: 10, marginTop: 15 }}>
                <select value={m.status} onChange={(e) => updateStatus('messages', m._id || m.id, e.target.value)} style={{ padding: 8 }}>
                  <option value='new'>new</option>
                  <option value='read'>read</option>
                  <option value='replied'>replied</option>
                  <option value='archived'>archived</option>
                </select>
                <button onClick={() => handleDelete('messages', m._id || m.id)} style={{ padding: '8px 15px', background: '#dc3545', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'interests' && (
        <div>
          <h2>Involvement Interests ({interests.length})</h2>
          {interests.map(i => (
            <div key={i._id || i.id} style={{ background: 'white', padding: 25, margin: '15px 0', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <div><b>{i.name}</b> — {i.email}</div>
                <span style={{ padding: '5px 10px', background: i.status === 'new' ? '#ffc107' : i.status === 'contacted' ? '#28a745' : '#6c757d', color: 'white', borderRadius: 4 }}>{i.status}</span>
              </div>
              <p style={{ margin: '10px 0' }}><b>Interest:</b> {i.interest}</p>
              {i.message && <p style={{ margin: '10px 0', lineHeight: 1.6 }}>{i.message}</p>}
              <div style={{ display: 'flex', gap: 10, marginTop: 15 }}>
                <select value={i.status} onChange={(e) => updateStatus('interests', i._id || i.id, e.target.value)} style={{ padding: 8 }}>
                  <option value='new'>new</option>
                  <option value='contacted'>contacted</option>
                  <option value='closed'>closed</option>
                </select>
                <button onClick={() => handleDelete('interests', i._id || i.id)} style={{ padding: '8px 15px', background: '#dc3545', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: 30, borderRadius: 8, width: '90%', maxWidth: 700, maxHeight: '90vh', overflow: 'auto' }}>
            <h2 style={{ marginTop: 0 }}>{modal.mode === 'create' ? 'Create' : 'Edit'} {modal.type === 'projects' ? 'Project' : modal.type === 'news' ? 'Article' : 'Resource'}</h2>
            <form onSubmit={handleSave}>
              {modal.type === 'projects' && (
                <>
                  <label style={{ display: 'block', marginBottom: 5 }}>Title *</label>
                  <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Slug</label>
                  <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Location</label>
                  <input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Category</label>
                  <input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Status</label>
                  <input value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Image URL</label>
                  <input value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Alt Text</label>
                  <input value={form.alt_text} onChange={e => setForm({ ...form, alt_text: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Overview</label>
                  <textarea value={form.overview} onChange={e => setForm({ ...form, overview: e.target.value })} rows={3} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Objectives (one per line)</label>
                  <textarea value={form.objectives} onChange={e => setForm({ ...form, objectives: e.target.value })} rows={4} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Activities (one per line)</label>
                  <textarea value={form.activities} onChange={e => setForm({ ...form, activities: e.target.value })} rows={4} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Community</label>
                  <textarea value={form.community} onChange={e => setForm({ ...form, community: e.target.value })} rows={2} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Impact</label>
                  <textarea value={form.impact} onChange={e => setForm({ ...form, impact: e.target.value })} rows={2} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                </>
              )}
              {modal.type === 'news' && (
                <>
                  <label style={{ display: 'block', marginBottom: 5 }}>Title *</label>
                  <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Slug</label>
                  <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Date Label</label>
                  <input value={form.date_label} onChange={e => setForm({ ...form, date_label: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Category</label>
                  <input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Author</label>
                  <input value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Image URL</label>
                  <input value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Alt Text</label>
                  <input value={form.alt_text} onChange={e => setForm({ ...form, alt_text: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Excerpt</label>
                  <textarea value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} rows={2} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Body (one paragraph per line)</label>
                  <textarea value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} rows={6} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>PDF URL</label>
                  <input value={form.pdf_url} onChange={e => setForm({ ...form, pdf_url: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <input type="checkbox" checked={form.published} onChange={e => setForm({ ...form, published: e.target.checked })} />
                    Published
                  </label>
                </>
              )}
              {modal.type === 'resources' && (
                <>
                  <label style={{ display: 'block', marginBottom: 5 }}>Title *</label>
                  <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Category</label>
                  <input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>Description</label>
                  <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'block', marginBottom: 5 }}>File URL</label>
                  <input value={form.file_url} onChange={e => setForm({ ...form, file_url: e.target.value })} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <input type="checkbox" checked={form.published} onChange={e => setForm({ ...form, published: e.target.checked })} />
                    Published
                  </label>
                </>
              )}
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 20 }}>
                <button type="button" onClick={() => setModal(null)} style={{ padding: '8px 16px', background: '#6c757d', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Cancel</button>
                <button type="submit" disabled={saving} style={{ padding: '8px 16px', background: '#2d5f3b', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>{saving ? 'Saving...' : 'Save'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}