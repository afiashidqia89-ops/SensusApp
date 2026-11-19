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

export default function AppShell({ title, description, children }: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="shell">
      <aside className="side">
        <div className="brand">🌴 Sensus Janjang</div>
        <nav className="nav">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </aside>
      <main>
        <header className="top">
          <div>
            <h1>{title}</h1>
            <p className="muted">{description}</p>
          </div>
        </header>
        {children ?? <section className="card"><p>Halaman siap dikembangkan.</p></section>}
      </main>
    </div>
  );
}
