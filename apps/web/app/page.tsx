import Link from "next/link";

const menuItems = [
  { label: "Dashboard", href: "/" },
  { label: "Pemeriksaan", href: "/pemeriksaan" },
  { label: "Verifikasi", href: "/verifikasi" },
  { label: "Peta", href: "/peta" },
  { label: "Data Master", href: "/master" },
  { label: "Pengguna", href: "/pengguna" },
  { label: "Laporan", href: "/laporan" },
];

const stats = [
  ["Pemeriksaan Hari Ini", "24"],
  ["Menunggu Verifikasi", "8"],
  ["Disetujui", "16"],
  ["Total Janjang", "28.460"],
];

export default function DashboardPage() {
  return (
    <div className="shell">
      <aside className="side">
        <div className="brand">🌴 Sensus Janjang</div>
        <nav className="nav">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className={item.href === "/" ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main>
        <header className="top">
          <div>
            <h1>Dashboard</h1>
            <p className="muted">Estate KB-1 • Kebun Teluk Kapuas</p>
          </div>
        </header>

        <section className="cards">
          {stats.map(([label, value]) => (
            <article className="card" key={label}>
              <div className="muted">{label}</div>
              <div className="value">{value}</div>
            </article>
          ))}
        </section>

        <section className="card panel">
          <h2>API untuk aplikasi native</h2>
          <p>Health check: <code>/api/v1/health</code></p>
          <p>Endpoint berikutnya: login, master data, pemeriksaan, upload, verifikasi, dan sinkronisasi.</p>
        </section>
      </main>
    </div>
  );
}
