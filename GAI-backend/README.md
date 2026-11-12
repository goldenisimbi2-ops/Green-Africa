# Green Africa Institute Backend

Node.js + Express + MySQL backend for the React/Vite GAI website.

## 1. Database

Create the database by importing `database.sql` in phpMyAdmin (or any MySQL client):

```bash
mysql -u root -p < database.sql
```

Re-importing is safe — every statement is `IF NOT EXISTS` or guarded.

## 2. Configure

```bash
cp .env.example .env
```

Then set your MySQL credentials and a long random `JWT_SECRET`. Generate one with:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

> This machine's MySQL 8 service listens on **3307** (`C:\ProgramData\MySQL\MySQL Server 8.0\my.ini`), which is what `.env.example` assumes. XAMPP's default is 3306 — change `DB_PORT` to match whatever you actually run.

## 3. Install and run

```bash
npm install
npm run dev
```

Backend: `http://localhost:5000`
Health check: `http://localhost:5000/api/health`

## 4. Seed content

The site content lives in `../GAI-frontend/src/data.js` so the frontend and API never drift:

```bash
npm run seed
```

This upserts projects, news articles and resources into MySQL, converting the frontend's string ids into slugs.

## 5. Create the first admin

```bash
npm run create-admin -- "GAI Admin" admin@example.com "StrongPassword123!"
```

## API

Public:
- `GET /api/projects`, `GET /api/projects/:idOrSlug`
- `GET /api/news`, `GET /api/news/:idOrSlug` (published only)
- `GET /api/resources` (published only)
- `POST /api/contact`
- `POST /api/involvement`

Auth:
- `POST /api/auth/login` → `{ token, user }`
- `GET /api/auth/me`

Admin (all require `Authorization: Bearer <token>`):
- `GET /api/admin/dashboard`
- `GET|POST /api/admin/projects`, `PUT|PATCH|DELETE /api/admin/projects/:idOrSlug`
- `GET|POST /api/admin/news`, `PUT|PATCH|DELETE /api/admin/news/:idOrSlug`
- `GET|POST /api/admin/resources`, `PUT|PATCH|DELETE /api/admin/resources/:id`
- `GET|PATCH|DELETE /api/admin/messages/:id`
- `GET|PATCH /api/admin/interests/:id`

Notes:
- `slug` is generated from `title` on create when omitted, and must be unique (duplicate → `409`).
- `objectives`, `activities` and `body` are JSON columns: send arrays/objects or JSON strings, they come back parsed.
- `published` accepts `true/false`, `1/0`, `"yes"/"no"`.
- Only `PUT`/`PATCH` with at least one valid field is accepted; invalid input returns `400` with a per-field `errors` object rather than a `500`.

## Wiring the frontend

Copy `../GAI-frontend/.env.example` to `../GAI-frontend/.env` (it already points at `http://localhost:5000/api`). Set `CLIENT_URL` in this backend's `.env` to the frontend's origin (default `http://localhost:5173`, comma-separated for multiple).