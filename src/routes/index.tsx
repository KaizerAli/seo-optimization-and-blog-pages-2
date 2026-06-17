import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SaaS Animate — Animation Studio for SaaS Explainers, Demos & UI Motion" },
      { name: "description", content: "Premium animation studio for SaaS. We make explainer videos, product demos, UX/UI animation, launch films and brand motion that convert visitors into customers." },
      { name: "keywords", content: "saas animation studio, saas explainer videos, product demo videos, ui motion design, saas launch video, brand motion, animated explainer video, motion design for saas" },
      { property: "og:title", content: "SaaS Animate — Animation Studio for SaaS" },
      { property: "og:description", content: "Explainer videos, product demos, UX/UI animation and launch films built to convert." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SaaS Animate — Animation Studio for SaaS" },
      { name: "twitter:description", content: "Explainer videos, product demos, UX/UI animation and launch films built to convert." },
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
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center pt-20 md:pt-28 pb-16">
          <div>
            <p className="eyebrow eyebrow-dot">Booking Q3 · 2026</p>
            <h1 className="mt-6 text-5xl md:text-7xl font-display">
              Animation that <em className="text-primary">moves</em> SaaS metrics.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              We're a focused animation studio for SaaS teams. Explainer videos, product demos, UI motion and launch films
              — engineered to convert, not decorate.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-base btn-primary">
                Start a project →
              </Link>
              <Link to="/portfolio" className="btn-base btn-outline">
                See the work
              </Link>
            </div>
          </div>
          
          {/* Hero Image - SaaS Dashboard */}
          <div className="relative aspect-video rounded-2xl overflow-hidden surface-card group">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"
              alt="SaaS Analytics Dashboard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="font-mono text-xs text-white/80">SAAS_DASHBOARD_UI.MP4</span>
              <span className="font-mono text-xs text-white/80">01:12 / 01:48</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="border-y border-border/40 py-8 overflow-hidden">
        <p className="text-center font-mono text-xs text-muted-foreground mb-6">Trusted by SaaS teams worldwide</p>
        <div className="flex gap-12 animate-marquee">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="font-display text-2xl text-muted-foreground/60 whitespace-nowrap">
              {l}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-24">
        <p className="eyebrow eyebrow-dot">Services</p>
        <h2 className="mt-6 text-4xl md:text-5xl max-w-3xl">A full motion stack for modern SaaS.</h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Link
              key={i}
              to="/services"
              className="surface-card p-8 hover:border-primary/40 transition-colors group"
            >
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-4 text-xl group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="mt-6 inline-block text-sm text-primary">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="container-page py-24">
        <p className="eyebrow eyebrow-dot">Recent Work</p>
        <h2 className="mt-6 text-4xl md:text-5xl">See the motion in action.</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="surface-card overflow-hidden group">
            <div className="relative aspect-video">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                alt="Product Demo Video"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="font-mono text-xs text-muted-foreground">Product Demo</p>
              <h3 className="mt-2 text-xl">SaaS Demo Video</h3>
              <p className="mt-2 text-sm text-muted-foreground">Animated product walkthrough with UI motion</p>
            </div>
          </div>
          <div className="surface-card overflow-hidden group">
            <div className="relative aspect-video">
              <img
                src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=450&fit=crop"
                alt="UI Motion Design"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="font-mono text-xs text-muted-foreground">UI Motion</p>
              <h3 className="mt-2 text-xl">Interface Animation System</h3>
              <p className="mt-2 text-sm text-muted-foreground">Micro-interactions and transitions for SaaS UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-page py-24">
        <p className="eyebrow eyebrow-dot">Process</p>
        <h2 className="mt-6 text-4xl md:text-5xl max-w-3xl">Predictable production. Premium output.</h2>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {process.map((p) => (
            <div key={p.step} className="surface-card p-8">
              <span className="font-mono text-sm text-primary">{p.step}</span>
              <h3 className="mt-4 text-xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div className="surface-card p-12 md:p-16 text-center">
          <p className="eyebrow eyebrow-dot">Let's build</p>
          <h2 className="mt-6 text-4xl md:text-5xl">Your next video should pay for itself.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your launch, demo or onboarding flow. We'll come back in 24 hours with a scope and timeline.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-base btn-primary">
              Start a project
            </Link>
            <Link to="/portfolio" className="btn-base btn-outline">
              See recent work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
