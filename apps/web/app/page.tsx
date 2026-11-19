import AppShell from "@/components/app-shell";

const stats = [
  ["Pemeriksaan Hari Ini", "24"],
  ["Menunggu Verifikasi", "8"],
  ["Disetujui", "16"],
  ["Total Janjang", "28.460"],
];

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard" description="Estate KB-1 • Kebun Teluk Kapuas">
      <section className="cards">
        {stats.map(([label, value]) => (
          <article className="card" key={label}>
            <p className="muted">{label}</p>
            <div className="value">{value}</div>
          </article>
        ))}
      </section>
      <section className="card panel">
        <h2>API untuk aplikasi native</h2>
        <p>Health check: <code>/api/v1/health</code></p>
        <p>Endpoint berikutnya: login, master data, pemeriksaan, upload, verifikasi, dan sinkronisasi.</p>
      </section>
    </AppShell>
  );
}
