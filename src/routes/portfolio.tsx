import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — SaaS Animation Case Studies | SaaS Animate" },
      { name: "description", content: "Selected SaaS animation work: explainer videos, product demos, UI motion and launch films for fast-growing SaaS companies." },
      { property: "og:title", content: "Portfolio — SaaS Animate" },
      { property: "og:description", content: "Selected explainer videos, product demos, UI motion and launch films." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

type Work = {
  client: string;
  project: string;
  category: string;
  metric: string;
  gradient: string;
  span?: string;
};

const works: Work[] = [
  { client: "Linearly", project: "Series A launch film", category: "Launch", metric: "+184% demo signups", gradient: "from-[oklch(0.45_0.18_280)] to-[oklch(0.2_0.05_280)]", span: "md:col-span-2 md:row-span-2" },
  { client: "Vaultly", project: "Onboarding explainer", category: "Explainer", metric: "+62% activation", gradient: "from-[oklch(0.55_0.15_180)] to-[oklch(0.2_0.05_200)]" },
  { client: "Helio", project: "Product demo · API platform", category: "Demo", metric: "2.3x trial→paid", gradient: "from-[oklch(0.7_0.18_60)] to-[oklch(0.25_0.05_40)]" },
  { client: "Northwind", project: "Dashboard motion system", category: "UI Motion", metric: "Shipped to 40k users", gradient: "from-[oklch(0.55_0.18_140)] to-[oklch(0.2_0.05_140)]", span: "md:col-span-2" },
  { client: "Stacked", project: "Product Hunt launch", category: "Launch", metric: "#1 Product of the Day", gradient: "from-[oklch(0.6_0.22_20)] to-[oklch(0.2_0.05_20)]" },
  { client: "Orbital", project: "Brand identity film", category: "Brand", metric: "1.2M views in week 1", gradient: "from-[oklch(0.5_0.12_240)] to-[oklch(0.18_0.04_240)]" },
  { client: "Pulse", project: "Pricing page explainer", category: "Explainer", metric: "+41% pricing→demo", gradient: "from-[oklch(0.65_0.2_320)] to-[oklch(0.2_0.05_320)]" },
];

function Portfolio() {
  return (
    <>
      <section className="container-page pt-20 md:pt-28 pb-12 max-w-4xl">
        <p className="eyebrow eyebrow-dot">Selected work</p>
        <h1 className="mt-6 text-5xl md:text-7xl">Motion that earned its place on the homepage.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A small, focused list. We only show work where the client measured a result and let us share it.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid md:grid-cols-3 auto-rows-[260px] gap-4">
          {works.map((w) => (
            <article
              key={w.project}
              className={`relative overflow-hidden rounded-2xl border border-hairline group cursor-pointer ${w.span ?? ""}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient}`} aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(1_0_0/0.12),transparent_60%)]" aria-hidden />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground/70 px-2.5 py-1 rounded-full bg-background/30 backdrop-blur">
                    {w.category}
                  </span>
                  <span className="w-10 h-10 rounded-full bg-background/40 backdrop-blur flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    ▶
                  </span>
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground/70">{w.client}</p>
                  <h3 className="mt-1 text-2xl md:text-3xl">{w.project}</h3>
                  <p className="mt-3 text-sm font-mono text-primary-foreground bg-primary inline-block px-2 py-1 rounded">
                    {w.metric}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="surface-card p-10 md:p-14 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl">Have a launch on the calendar?</h2>
            <p className="mt-3 text-muted-foreground">We're booking new SaaS projects for Q3 2026.</p>
          </div>
          <Link to="/contact" className="btn-base btn-primary self-start">Start a project →</Link>
        </div>
      </section>
    </>
  );
}
