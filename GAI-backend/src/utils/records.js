export const RECORD_SCHEMAS = {
  projects: {
    table: 'projects',
    fields: {
      slug: { type: 'string', required: true, unique: true },
      title: { type: 'string', required: true },
      location: { type: 'string' },
      category: { type: 'string' },
      status: { type: 'string' },
      image_url: { type: 'string' },
      alt_text: { type: 'string' },
      overview: { type: 'text' },
      objectives: { type: 'json' },
      activities: { type: 'json' },
      community: { type: 'text' },
      impact: { type: 'text' }
    }
  },
  news: {
    table: 'news',
    fields: {
      slug: { type: 'string', required: true, unique: true },
      date_label: { type: 'string' },
      category: { type: 'string' },
      author: { type: 'string' },
      title: { type: 'string', required: true },
      image_url: { type: 'string' },
      alt_text: { type: 'string' },
      excerpt: { type: 'text' },
      body: { type: 'json' },
      pdf_url: { type: 'string' },
      published: { type: 'boolean', default: 1 },
      published_at: { type: 'datetime' }
    }
  },
  resources: {
    table: 'resources',
    fields: {
      category: { type: 'string' },
      title: { type: 'string', required: true },
      description: { type: 'text' },
      file_url: { type: 'string' },
      published: { type: 'boolean', default: 1 }
    }
  }
};

export const MESSAGE_STATUSES = ['new', 'read', 'replied', 'archived'];
export const INTEREST_STATUSES = ['new', 'contacted', 'closed'];
export const INTERESTS = ['partner', 'support', 'volunteer', 'collaborate'];

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 180);
}

function toBoolean(value) {
  if (typeof value === 'boolean') return value ? 1 : 0;
  if (typeof value === 'number') return value ? 1 : 0;
  const s = String(value).trim().toLowerCase();
  if (['1', 'true', 'yes', 'on'].includes(s)) return 1;
  if (['0', 'false', 'no', 'off'].includes(s)) return 0;
  return null;
}

function toDatetime(value) {
  if (value === null || value === undefined || value === '') return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

/**
 * Normalizes a raw request body into column -> value pairs for a schema.
 * Returns { values, errors }. Undefined fields are omitted so MySQL defaults apply.
 */
export function normalize(schema, body, { partial = false } = {}) {
  const values = {};
  const errors = {};

  for (const [field, def] of Object.entries(schema.fields)) {
    const raw = body?.[field];

    if (raw === undefined) {
      if (!partial && def.default !== undefined) values[field] = def.default;
      continue;
    }

    if (raw === null || raw === '') {
      if (def.required) {
        errors[field] = `${field.replace(/_/g, ' ')} is required.`;
        continue;
      }
      values[field] = null;
      continue;
    }

    switch (def.type) {
      case 'json': {
        if (typeof raw === 'string') {
          try {
            JSON.parse(raw);
            values[field] = raw;
          } catch {
            errors[field] = `${field.replace(/_/g, ' ')} must be valid JSON.`;
          }
        } else if (typeof raw === 'object') {
          values[field] = JSON.stringify(raw);
        } else {
          values[field] = JSON.stringify(raw);
        }
        break;
      }
      case 'boolean': {
        const flag = toBoolean(raw);
        if (flag === null) errors[field] = `${field.replace(/_/g, ' ')} must be true or false.`;
        else values[field] = flag;
        break;
      }
      case 'datetime': {
        const date = toDatetime(raw);
        if (raw && !date) errors[field] = `${field.replace(/_/g, ' ')} must be a valid date.`;
        else values[field] = date;
        break;
      }
      default: {
        const str = typeof raw === 'string' ? raw.trim() : String(raw);
        if (def.required && !str) errors[field] = `${field.replace(/_/g, ' ')} is required.`;
        else values[field] = str;
      }
    }
  }

  if (!errors.slug && values.slug === undefined && schema.fields.slug) {
    if (body?.title) values.slug = slugify(body.title);
    else if (!partial) errors.slug = 'slug is required.';
  }

  if (values.slug) values.slug = slugify(values.slug);
  if (!partial && values.published === 1 && !values.published_at) {
    values.published_at = new Date();
  }

  return { values, errors };
}

export function parseJsonColumns(schema, row) {
  if (!row) return row;
  const out = { ...row };
  for (const [field, def] of Object.entries(schema.fields)) {
    if (def.type !== 'json' || out[field] === null || out[field] === undefined) continue;
    if (typeof out[field] === 'string') {
      try {
        out[field] = JSON.parse(out[field]);
      } catch {
        out[field] = null;
      }
    }
  }
  return out;
}