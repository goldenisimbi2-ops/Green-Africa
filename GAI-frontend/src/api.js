const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(path, options={}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || 'Request failed.');
  return data;
}
export const api = {
  projects: () => request('/projects'),
  project: (id) => request(`/projects/${id}`),
  news: () => request('/news'),
  article: (id) => request(`/news/${id}`),
  resources: () => request('/resources'),
  contact: (payload) => request('/contact',{method:'POST',body:JSON.stringify(payload)}),
  involvement: (payload) => request('/involvement',{method:'POST',body:JSON.stringify(payload)}),
  login: (payload) => request('/auth/login',{method:'POST',body:JSON.stringify(payload)})
};
export default api;
