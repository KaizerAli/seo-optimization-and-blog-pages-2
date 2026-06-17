import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — SaaS Animation Case Studies | SaaS Animate" },
      { name: "description", content: "Selected SaaS animation work: explainer videos, product demos, UI motion and launch films for fast-growing SaaS companies." },
      { name: "keywords", content: "saas animation portfolio, explainer video examples, product demo videos, saas case studies, motion design portfolio" },
      { property: "og:title", content: "Portfolio — SaaS Animate" },
      { property: "og:description", content: "Selected explainer videos, product demos, UI motion and launch films." },
      { property: "og:url", content: "/portfolio" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Portfolio — SaaS Animate" },
      { name: "twitter:description", content: "Selected explainer videos, product demos, UI motion and launch films." },
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
  video?: string;
  poster?: string;
  span?: string;
};

const works: Work[] = [
  { 
    client: "Linearly", 
    project: "Series A launch film", 
    category: "Launch", 
    metric: "+184% demo signups", 
    gradient: "from-[oklch(0.45_0.18_280)] to-[oklch(0.2_0.05_280)]",
    video: "/videos/saas-explainer.mp4",
    poster: "/videos/poster-explainer.png",
    span: "md:col-span-2 md:row-span-2" 
  },
  { 
    client: "Vaultly", 
    project: "Onboarding explainer", 
    category: "Explainer", 
    metric: "+62% activation", 
    gradient: "from-[oklch(0.55_0.15_180)] to-[oklch(0.2_0.05_200)]",
    video: "/videos/saas-demo.mp4",
    poster: "/videos/poster-demo.png"
  },
  { 
    client: "Helio", 
    project: "Product demo · API platform", 
    category: "Demo", 
    metric: "2.3x trial→paid", 
    gradient: "from-[oklch(0.7_0.18_60)] to-[oklch(0.25_0.05_40)]",
    video: "/videos/ui-motion.mp4",
    poster: "/videos/poster-explainer.png"
  },
  { 
    client: "Northwind", 
    project: "Dashboard motion system", 
    category: "UI Motion", 
    metric: "Shipped to 40k users", 
    gradient: "from-[oklch(0.55_0.18_140)] to-[oklch(0.2_0.05_140)]",
    video: "/videos/ui-motion.mp4",
    poster: "/videos/poster-demo.png",
    span: "md:col-span-2" 
  },
  { 
    client: "Stacked", 
    project: "Product Hunt launch", 
    category: "Launch", 
    metric: "#1 Product of the Day", 
    gradient: "from-[oklch(0.6_0.22_20)] to-[oklch(0.2_0.05_20)]",
    video: "/videos/saas-explainer.mp4",
    poster: "/videos/poster-explainer.png"
  },
  { 
    client: "Orbital", 
    project: "Brand identity film", 
    category: "Brand", 
    metric: "1.2M views in week 1", 
    gradient: "from-[oklch(0.5_0.12_240)] to-[oklch(0.18_0.04_240)]",
    video: "/videos/saas-demo.mp4",
    poster: "/videos/poster-demo.png"
  },
  { 
    client: "Pulse", 
    project: "Pricing page explainer", 
    category: "Explainer", 
    metric: "+41% pricing→demo", 
    gradient: "from-[oklch(0.65_0.2_320)] to-[oklch(0.2_0.05_320)]",
    video: "/videos/ui-motion.mp4",
    poster: "/videos/poster-explainer.png"
  },
];

function Portfolio() {
  return (
    <>
      <section className="container-page pt-20 md:pt-28 pb-12">
        <p className="eyebrow eyebrow-dot">Selected work</p>
        <h1 className="mt-6 text-5xl md:text-7xl">Motion that earned its place on the homepage.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          A small, focused list. We only show work where the client measured a result and let us share it.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid md:grid-cols-3 gap-4 auto-rows-fr">
          {works.map((w, i) => (
            <div
              key={i}
              className={`surface-card overflow-hidden hover:border-primary/40 transition-colors group flex flex-col ${w.span || ""}`}
            >
              <div className={`relative aspect-video bg-gradient-to-br ${w.gradient} overflow-hidden`}>
                {w.video && (
                  <video
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    poster={w.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={w.video} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-white/80 bg-black/40 px-3 py-1 rounded-full">
                    ▶ Play
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center font-mono text-xs text-muted-foreground">
                  <span>{w.category}</span>
                  <span>{w.metric}</span>
                </div>
                <h3 className="mt-4 text-xl group-hover:text-primary transition-colors">
                  {w.client}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{w.project}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="surface-card p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl">Have a launch on the calendar?</h2>
          <p className="mt-4 text-muted-foreground">We're booking new SaaS projects for Q3 2026.</p>
          <Link to="/contact" className="btn-base btn-primary mt-8">
            Start a project →
          </Link>
        </div>
      </section>
    </>
  );
}
