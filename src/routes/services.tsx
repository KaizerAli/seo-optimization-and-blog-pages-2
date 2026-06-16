import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SaaS Animation Services — Explainers, Demos, UI Motion | SaaS Animate" },
      { name: "description", content: "Animation services for SaaS: explainer videos, product demos, UX/UI animation, launch films, brand and promo videos. Built for conversion." },
      { property: "og:title", content: "SaaS Animation Services" },
      { property: "og:description", content: "Explainers, product demos, UI motion, launch films and brand videos for SaaS teams." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    name: "SaaS Explainer Videos",
    summary: "Story-driven 60–90 second films that teach the product, prove the value and end on a single call to action.",
    points: ["Custom script & storyboard", "Professional voiceover", "Animated in After Effects", "Three cutdowns included"],
    timeline: "3–5 weeks",
  },
  {
    name: "Product Demo Videos",
    summary: "High-fidelity screen captures animated into a guided walkthrough — for landing pages, outbound and sales decks.",
    points: ["Pixel-accurate UI capture", "Cursor & UI motion design", "VO or text-led variants", "Vertical 9:16 cutdown"],
    timeline: "2–4 weeks",
  },
  {
    name: "UX/UI Animation",
    summary: "Micro-interactions, transitions and motion systems delivered as Lottie, Rive or shipped directly to your codebase.",
    points: ["Motion system audit", "Component-level prototypes", "Lottie / Rive / code delivery", "Engineering handoff"],
    timeline: "2–6 weeks",
  },
  {
    name: "Launch Videos",
    summary: "Hero films for Product Hunt, ARR milestones, funding announcements and major feature releases.",
    points: ["Concept & creative direction", "Animation + sound design", "Social-first cutdowns", "Launch-day distribution kit"],
    timeline: "3–6 weeks",
  },
  {
    name: "Brand Videos",
    summary: "Identity-led brand films that make your SaaS recognizable in three seconds — opening sequences, manifestos, culture pieces.",
    points: ["Creative direction", "Original sound design", "Motion brand tokens", "4K master deliverables"],
    timeline: "4–8 weeks",
  },
  {
    name: "Promo & Campaign Videos",
    summary: "Always-on motion content for paid social, lifecycle email and event activations.",
    points: ["Modular template system", "Multi-aspect deliverables", "Localization-ready", "Monthly retainer available"],
    timeline: "Ongoing",
  },
];

function Services() {
  return (
    <>
      <section className="container-page pt-20 md:pt-28 pb-12 max-w-4xl">
        <p className="eyebrow eyebrow-dot">Services</p>
        <h1 className="mt-6 text-5xl md:text-7xl">Six ways we ship motion that converts.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Every engagement is scoped to a single outcome — a higher demo-booking rate, a stronger launch, a smoother
          onboarding flow. No retainers you can't measure.
        </p>
      </section>

      <section className="container-page pb-24 grid gap-4">
        {services.map((s, i) => (
          <article key={s.name} className="surface-card p-8 md:p-10 grid md:grid-cols-[1fr_2fr] gap-8 hover:border-primary/40 transition-colors">
            <div>
              <p className="font-mono text-xs text-muted-foreground">0{i + 1} / 06</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{s.name}</h2>
              <p className="mt-4 font-mono text-xs text-primary">{s.timeline}</p>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">{s.summary}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">◆</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page pb-24">
        <div className="surface-card p-10 md:p-14 text-center">
          <h2 className="text-4xl md:text-5xl">Not sure which service fits?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Send us your product link. We'll recommend the right format in one short reply — no pitch deck required.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-base btn-primary">Get a recommendation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
