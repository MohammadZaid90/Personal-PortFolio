#!/usr/bin/env node
/**
 * Seed Script — Populates MongoDB with all 11 projects.
 *
 * Prerequisites:
 *   1. Backend must be running:  cd backend && npm run dev
 *   2. .env must have ADMIN_PASSWORD set
 *
 * Usage:
 *   ADMIN_PASSWORD=yourpassword node scripts/seed.js
 *   OR set it in backend/.env and run: npm run seed (from root)
 */

import dotenv from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../backend/.env') });

const BASE = `http://localhost:${process.env.PORT || 5000}`;
const PASSWORD = process.env.ADMIN_PASSWORD;

if (!PASSWORD) {
  console.error('❌ ADMIN_PASSWORD is not set. Check backend/.env');
  process.exit(1);
}

async function seed() {
  console.log('🌱 Starting seed process...\n');

  // 1. Login
  console.log('🔐 Authenticating...');
  const loginRes = await fetch(`${BASE}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: PASSWORD }),
  });

  if (!loginRes.ok) {
    const err = await loginRes.json().catch(() => ({}));
    console.error('❌ Login failed:', err.message || loginRes.status);
    process.exit(1);
  }

  const { token } = await loginRes.json();
  console.log('✅ Authenticated\n');

  // 2. Seed projects
  console.log('📦 Seeding projects...');
  const seedRes = await fetch(`${BASE}/api/projects/seed`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const seedData = await seedRes.json();
  if (seedData.success) {
    console.log(`✅ ${seedData.message}`);
  } else {
    console.error('❌ Seed failed:', seedData.message);
    process.exit(1);
  }

  // 3. Verify
  console.log('\n🔍 Verifying...');
  const verifyRes = await fetch(`${BASE}/api/projects`);
  const verifyData = await verifyRes.json();
  console.log(`✅ ${verifyData.count} projects now in database:\n`);
  verifyData.data.forEach((p, i) => console.log(`   ${i + 1}. ${p.title}`));
  console.log('\n🚀 Seed complete!');
}

seed().catch((err) => {
  console.error('❌ Unexpected error:', err.message);
  process.exit(1);
});
