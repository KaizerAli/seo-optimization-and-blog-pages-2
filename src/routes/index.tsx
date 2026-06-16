import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SaaS Animate — Animation Studio for SaaS Explainers, Demos & UI Motion" },
      { name: "description", content: "Premium animation studio for SaaS. We make explainer videos, product demos, UX/UI animation, launch films and brand motion that convert visitors into customers." },
      { property: "og:title", content: "SaaS Animate — Animation Studio for SaaS" },
      { property: "og:description", content: "Explainer videos, product demos, UX/UI animation and launch films built to convert." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { title: "SaaS Explainer Videos", desc: "60–90s films that turn a complex product into a story buyers finish." },
  { title: "Product Demo Videos", desc: "Pixel-accurate UI captures, animated and narrated for landing pages and sales." },
  { title: "UX/UI Animation", desc: "Micro-interactions, transitions and motion systems shipped as Lottie or code." },
  { title: "Launch Videos", desc: "Hero films for Product Hunt, ARR milestones, funding and feature releases." },
  { title: "Brand & Promo Videos", desc: "Identity-led motion that makes your brand recognizable in three seconds." },
  { title: "Motion Systems", desc: "Easing scales, choreography rules and component libraries your team can ship from." },
];

const logos = ["Linearly", "Vaultly", "Northwind", "Helio", "Stacked", "Modulo", "Orbital", "Clay", "Pulse", "Riverflow"];

const process = [
  { step: "01", title: "Discovery", desc: "We audit your funnel, ICP and existing assets in a 45-minute kickoff." },
  { step: "02", title: "Script & storyboard", desc: "One outcome per video. Approved before a single frame moves." },
  { step: "03", title: "Design & animation", desc: "On-brand boards, then full animation in After Effects, Rive or Lottie." },
  { step: "04", title: "Launch & cutdowns", desc: "Hero film plus paid social, vertical and silent-autoplay variants." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 glow-grid pointer-events-none" aria-hidden />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" aria-hidden />
        <div className="container-page relative pt-20 md:pt-28 pb-20">
          <p className="eyebrow eyebrow-dot"><span className="animate-pulse-dot">Booking Q3 · 2026</span></p>
          <h1 className="mt-6 text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
            Animation that <em className="text-primary not-italic">moves</em> SaaS metrics.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We're a focused animation studio for SaaS teams. Explainer videos, product demos, UI motion and launch films
            — engineered to convert, not decorate.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-base btn-primary">Start a project →</Link>
            <Link to="/portfolio" className="btn-base btn-ghost">See the work</Link>
          </div>

          {/* Hero visual */}
          <div className="mt-16 surface-card p-3 md:p-4 relative">
            <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-surface-elev via-background to-surface-elev relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 p-6">
                <div className="col-span-3 row-span-6 rounded-lg hairline bg-surface" />
                <div className="col-span-9 row-span-1 rounded-lg hairline bg-surface flex items-center px-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="col-span-5 row-span-3 rounded-lg hairline bg-surface relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end p-4">
                    {[40, 65, 30, 80, 55, 92, 70].map((h, i) => (
                      <div key={i} className="flex-1 mx-0.5 rounded-t bg-primary/70" style={{ height: `${h}%`, opacity: 0.3 + i * 0.1 }} />
                    ))}
                  </div>
                </div>
                <div className="col-span-4 row-span-3 rounded-lg hairline bg-surface flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
                    <div className="absolute inset-0 rounded-full border-2 border-primary border-r-transparent border-b-transparent animate-spin" style={{ animationDuration: "3s" }} />
                  </div>
                </div>
                <div className="col-span-9 row-span-2 rounded-lg hairline bg-surface flex items-center px-6 gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">▶</div>
                  <div className="flex-1">
                    <div className="h-2 rounded-full bg-foreground/10 overflow-hidden">
                      <div className="h-full w-2/3 bg-primary" />
                    </div>
                    <p className="mt-2 text-[0.65rem] font-mono text-muted-foreground">SAAS_EXPLAINER_V4.MP4 · 01:12 / 01:48</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="border-y border-hairline py-10 overflow-hidden">
        <p className="container-page eyebrow mb-6">Trusted by SaaS teams worldwide</p>
        <div className="flex overflow-hidden">
          <div className="flex gap-16 pr-16 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-2xl text-muted-foreground/70">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow eyebrow-dot">Services</p>
            <h2 className="mt-4 text-4xl md:text-6xl max-w-2xl">A full motion stack for modern SaaS.</h2>
          </div>
          <Link to="/services" className="btn-base btn-ghost self-start">All services →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <article key={s.title} className="surface-card p-7 hover:border-primary/40 transition-colors group">
              <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="mt-6 inline-block text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-page py-24 md:py-32 border-t border-hairline">
        <p className="eyebrow eyebrow-dot">Process</p>
        <h2 className="mt-4 text-4xl md:text-6xl max-w-3xl">Predictable production. Premium output.</h2>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
          {process.map((p) => (
            <div key={p.step} className="bg-background p-8">
              <p className="font-mono text-primary text-sm">{p.step}</p>
              <h3 className="mt-4 text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24 md:py-32">
        <div className="surface-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <p className="eyebrow eyebrow-dot">Let's build</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Your next video should pay for itself.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Tell us about your launch, demo or onboarding flow. We'll come back in 24 hours with a scope and timeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-primary">Start a project</Link>
              <Link to="/portfolio" className="btn-base btn-ghost">See recent work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
