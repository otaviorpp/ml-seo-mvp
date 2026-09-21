import { getAnalytics } from "@/lib/store";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  const analytics = getAnalytics();
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">MVP analytics</span>
          <h1>O que as pessoas estão fazendo?</h1>
          <p>Dados in-memory. Reiniciar o servidor zera este painel.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="admin-kpis">
            <div className="kpi"><span>Page views</span><strong>{analytics.pageViews}</strong></div>
            <div className="kpi"><span>Cliques ML</span><strong>{analytics.outboundClicks}</strong></div>
            <div className="kpi"><span>CTR outbound</span><strong>{analytics.outboundCtr.toFixed(1)}%</strong></div>
            <div className="kpi"><span>Eventos</span><strong>{analytics.totalEvents}</strong></div>
          </div>
          <div className="section-heading">
            <h2>Eventos recentes</h2>
            <p>Já conseguimos identificar página de origem, produto e horário dos cliques enviados ao Mercado Livre.</p>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Tipo</th><th>Página</th><th>Produto</th><th>Quando</th></tr></thead>
              <tbody>
                {analytics.recentEvents.map((event) => (
                  <tr key={event.id}>
                    <td>{event.type}</td>
                    <td>{event.path ?? "—"}</td>
                    <td>{event.productId ?? "—"}</td>
                    <td>{new Date(event.createdAt).toLocaleString("pt-BR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
