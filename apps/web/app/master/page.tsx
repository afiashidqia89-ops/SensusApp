import AppShell from "@/components/app-shell";
export default function Page(){return <AppShell title="Data Master" description="Estate, kebun, afdeling, dan blok"><section className="cards">{["Estate","Kebun","Afdeling","Blok"].map(x=><article className="card" key={x}><h2>{x}</h2><p className="muted">Kelola data {x.toLowerCase()}.</p></article>)}</section></AppShell>}
