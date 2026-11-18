# Setup GitHub, Neon, dan Vercel

## GitHub
1. Buat repo kosong `sensus-janjang`.
2. Ekstrak starter lalu push ke branch `main`.
3. Aktifkan branch protection dan wajibkan Web CI serta Mobile CI.

## Neon
1. Buat project PostgreSQL.
2. Jalankan `packages/database/migrations/0000_initial.sql` pada SQL Editor.
3. Simpan pooled connection string sebagai `DATABASE_URL` di Vercel.
4. Pisahkan branch database Preview dan Production.

## Vercel
1. Import repo GitHub.
2. Set Root Directory ke `apps/web`.
3. Tambahkan `DATABASE_URL`, `JWT_SECRET`, dan `APP_URL`.
4. Deploy dan uji `https://domain/api/v1/health`.

## Flutter Android
1. Instal Flutter stable dan Android Studio.
2. Di `apps/mobile`, jalankan `flutter create . --platforms=android,ios` jika file platform lengkap belum ada.
3. Jalankan `flutter pub get`.
4. Emulator: `flutter run --dart-define=API_BASE_URL=http://10.0.2.2:3000`.
5. Produksi: `flutter build appbundle --release --dart-define=API_BASE_URL=https://domain.vercel.app`.

## Catatan Vercel
Vercel hanya men-deploy web dan API. APK/AAB dibangun oleh Flutter melalui mesin developer atau GitHub Actions, lalu didistribusikan melalui Google Play Console, Firebase App Distribution, atau MDM perusahaan.
