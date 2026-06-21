# Mohammad Zaid — Production MERN Portfolio v2.0

A fully production-ready, zero-error MERN stack portfolio.
**Backend:** Node.js + Express + MongoDB | **Frontend:** Vite + React + Tailwind + Framer Motion

---

## Audit — All Bugs Fixed in v2

| # | File | Bug | Fix |
|---|------|-----|-----|
| 1 | `ScrollProgress.jsx` | `css={{...}}` prop not valid in React/Framer | Replaced with `style={{}}` |
| 2 | `Contact.jsx` | `'I'll'` unescaped apostrophe in JSX string literal (syntax error) | Rewrote as `I will` |
| 3 | `scripts/seed.js` | `import fetch from 'node:http'` — wrong module (http ≠ fetch) | Uses native `fetch` (Node 18+) |
| 4 | `analyticsController.js` | Dynamic `await import()` inside async fn (anti-pattern, slow) | Static top-level import |
| 5 | `vite.config.js` | `__dirname` undefined in ESM modules | Fixed with `fileURLToPath(new URL(...))` |
| 6 | `index.css` + components | `bg-white/6`, `bg-white/8`, `hover:bg-white/8` — not in Tailwind's default scale | Replaced with inline `style={{}}` or added to safelist |
| 7 | `frontend/package.json` | `react-router-dom` imported but never used | Removed |
| 8 | `frontend/package.json` | `react-intersection-observer` imported but custom hook used instead | Removed |
| 9 | `backend/package.json` | `bcryptjs` imported but never used anywhere | Removed |
| 10 | `Experience.jsx` | `borderBottom` set twice in same style object (conflicting rules) | Fixed to single declaration |
| 11 | Missing | No `public/` directory (robots.txt, sitemap, favicon, manifest) | Created all |
| 12 | Missing | No `vercel.json` / `netlify.toml` / `render.yaml` / `Dockerfile` | Created all |
| 13 | `Contact.jsx` | JSX text with `'` — apostrophes in JSX text nodes need `&apos;` | Fixed throughout |
| 14 | `server.js` | `app.listen` on `localhost` only — blocks Docker/Render | Changed to `0.0.0.0` |
| 15 | `About.jsx` / `MedMentor.jsx` | Raw `'` in JSX text (`I'm`, `Let's`, `it's`) — ESLint/build errors | Escaped as `&apos;` |

---

## Project Structure

```
portfolio-v2/
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   │   ├── analyticsController.js
│   │   ├── contactController.js
│   │   └── projectController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Contact.js
│   │   ├── Project.js
│   │   └── Visitor.js
│   ├── routes/
│   │   ├── analytics.js
│   │   ├── contact.js
│   │   └── projects.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── site.webmanifest
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   ├── sections/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── MedMentor.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── GitHub.jsx
│   │   │   │   └── Contact.jsx
│   │   │   └── ui/
│   │   │       ├── Loader.jsx
│   │   │       ├── Reveal.jsx
│   │   │       └── ScrollProgress.jsx
│   │   ├── hooks/useInView.js
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── data.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vercel.json
│   └── package.json
├── scripts/seed.js
├── Dockerfile
├── docker-compose.yml
├── render.yaml
├── netlify.toml
├── vercel.json
├── package.json
└── README.md
```

---

## Local Development — Step by Step

### Step 1: Install dependencies

```bash
# From project root
npm install
cd backend && npm install
cd ../frontend && npm install
```

### Step 2: Configure backend environment

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
JWT_SECRET=at_least_32_random_characters_here
ADMIN_PASSWORD=your_secure_admin_password
NODE_ENV=development
CLIENT_URL=http://localhost:5173
EMAIL_USER=sheikhzaid768@gmail.com
EMAIL_PASS=your_16char_gmail_app_password
EMAIL_TO=sheikhzaid768@gmail.com
```

### Step 3: Configure frontend environment

```bash
cp frontend/.env.example frontend/.env
```

`frontend/.env` already works for local dev:
```env
VITE_API_URL=http://localhost:5000/api
```

### Step 4: Run both servers

```bash
# From project root (runs backend:5000 + frontend:5173)
npm run dev
```

Or separately:
```bash
npm run dev:backend    # http://localhost:5000
npm run dev:frontend   # http://localhost:5173
```

### Step 5: Seed Projects into MongoDB

```bash
# Backend must be running first
node scripts/seed.js
```

This seeds all 11 projects into MongoDB automatically.

---

## Gmail App Password Setup (for Contact Form)

1. Go to your Google Account → Security
2. Enable 2-Factor Authentication
3. Search for "App Passwords"
4. Generate a password for **Mail**
5. Copy the 16-character password (no spaces) into `EMAIL_PASS`

---

## API Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/health` | — | Health check |
| POST | `/api/admin/login` | — | Get admin JWT token |
| POST | `/api/contact` | — | Submit contact message (rate limited: 5/hr) |
| GET | `/api/contact` | Admin | Get all messages |
| PATCH | `/api/contact/:id/status` | Admin | Update message status |
| GET | `/api/projects` | — | Get all projects |
| GET | `/api/projects?category=ai` | — | Filter by category |
| POST | `/api/projects/seed` | Admin | Seed default 11 projects |
| POST | `/api/projects` | Admin | Create project |
| PUT | `/api/projects/:id` | Admin | Update project |
| DELETE | `/api/projects/:id` | Admin | Delete project |
| POST | `/api/analytics/visit` | — | Log page visit |
| GET | `/api/analytics/stats` | Admin | Get visitor statistics |

---

## Deployment

### Frontend → Vercel (Recommended)

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. **Root Directory:** `frontend`
5. **Build Command:** `npm run build`
6. **Output Directory:** `dist`
7. **Environment Variables:**
   ```
   VITE_API_URL = https://your-backend.onrender.com/api
   ```
8. Click Deploy ✅

### Frontend → Netlify

1. Go to [netlify.com](https://netlify.com) → New site from Git
2. Connect repo
3. **Base directory:** `frontend`
4. **Build command:** `npm run build`
5. **Publish directory:** `frontend/dist`
6. Add env var: `VITE_API_URL = https://your-backend.onrender.com/api`
7. Deploy ✅ (netlify.toml handles SPA redirects automatically)

### Backend → Render

1. Go to [render.com](https://render.com) → New Web Service
2. Connect repo
3. **Root Directory:** `backend`
4. **Build Command:** `npm install`
5. **Start Command:** `node server.js`
6. **Environment:** Add all vars from `.env.example`
7. Deploy ✅

After deploy, update `CLIENT_URL` in Render env to your Vercel/Netlify URL.

### Docker (Local Full Stack)

```bash
# Copy and fill in backend/.env first, then:
docker compose up --build

# Services:
# MongoDB  → localhost:27017
# Backend  → localhost:5000
# Frontend → localhost:5173
```

---

## Production Checklist

- [x] All JSX syntax errors fixed
- [x] No undefined variables or broken imports
- [x] ESM `__dirname` fix in vite.config.js
- [x] All Tailwind classes validated (no arbitrary opacity bugs)
- [x] `server.js` binds to `0.0.0.0` for Render/Docker
- [x] Rate limiting on contact form (5/hour)
- [x] Helmet security headers
- [x] CORS configured for production domains
- [x] Static fallback data if backend offline
- [x] `public/robots.txt`, `sitemap.xml`, `favicon.svg`, `site.webmanifest`
- [x] Full Open Graph + Twitter Card + JSON-LD structured data
- [x] Framer Motion exit animations
- [x] Mobile responsive (hamburger nav, stacked grids)
- [x] Accessible labels on all interactive elements
- [x] `vercel.json` SPA rewrites
- [x] `netlify.toml` SPA redirects + security headers
- [x] `render.yaml` one-click backend deploy
- [x] `Dockerfile` + `docker-compose.yml`
- [x] Seed script uses Node 18 native fetch (no extra deps)
- [x] Error boundaries: contact form, projects (with fallback), GitHub graph

---

Built by **Mohammad Zaid** · UET Lahore · 2026 🇵🇰
