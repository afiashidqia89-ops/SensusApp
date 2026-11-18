# Web Sensus Janjang

Dashboard web dan REST API untuk aplikasi native Sensus Janjang. Stack: Next.js, TypeScript, Neon PostgreSQL, Drizzle ORM, GitHub Actions, dan Vercel.

## Menjalankan
```bash
cp .env.example .env.local
npm install
npm run db:migrate
npm run dev
```

Buka `http://localhost:3000`. Uji Neon melalui `http://localhost:3000/api/v1/health`.

## Deploy Vercel
Import repository GitHub, tambahkan `DATABASE_URL`, `APP_URL`, dan `JWT_SECRET`, lalu deploy. Jika web ini disimpan di monorepo, set Root Directory ke folder web.

## API awal
- `GET /api/v1/health`
- `POST /api/v1/auth/login`
- `GET /api/v1/sync/master`
- `POST /api/v1/inspections`

## Sebelum produksi
Implementasikan autentikasi access/refresh token, Argon2id, RBAC, audit log, signed upload foto ke object storage, rate limiting, validasi GeoJSON, pagination, dan pengujian endpoint.
