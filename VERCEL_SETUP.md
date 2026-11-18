# Vercel Setup
1. Push folder ini ke repository GitHub.
2. Import repository di Vercel.
3. Framework Preset: Next.js.
4. Tambahkan environment variables `DATABASE_URL`, `APP_URL`, `JWT_SECRET` untuk Preview dan Production.
5. Hubungkan domain.
6. Jalankan migrasi Neon sebelum deployment produksi.
7. Periksa `/api/v1/health`.

Catatan: aplikasi native menggunakan URL deployment Vercel sebagai `API_BASE_URL`; aplikasi native tidak boleh menerima `DATABASE_URL`.
