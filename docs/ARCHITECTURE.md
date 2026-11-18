# Arsitektur Native

```text
Flutter Android/iOS
  ├─ SQLite: master, draft, track, sync queue
  ├─ Camera + GPS native permissions
  └─ HTTPS + Bearer token
          ↓
Next.js REST API di Vercel
  ├─ autentikasi, RBAC, validasi Zod
  ├─ signed upload untuk foto
  └─ idempotency dan audit log
          ↓
Neon PostgreSQL
```

## Keputusan teknis
- Flutter dipilih agar satu codebase menghasilkan binary native Android dan iOS.
- Prioritas pertama Android karena perangkat lapangan dan kebutuhan background location.
- SQLite menyimpan operasi offline; `sync_queue` mengirim ulang saat jaringan tersedia.
- Mobile menghasilkan `client_id` UUID. API memberlakukan unique constraint agar retry tidak membuat duplikat.
- Selfie masuk object storage, bukan PostgreSQL. Database menyimpan URL, hash SHA-256, waktu, dan koordinat.
- Mobile tidak pernah menerima `DATABASE_URL` atau kredensial Neon.

## Track GPS
Mulai dengan interval 5–10 detik atau perpindahan 5–10 meter. Simpan titik lokal per sesi, sederhanakan bila perlu, lalu kirim batch GeoJSON. Rekaman background di Android memerlukan foreground service dan notifikasi permanen selama sensus aktif.
