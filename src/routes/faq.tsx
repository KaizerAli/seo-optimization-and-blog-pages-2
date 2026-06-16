import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

const faqs = [
  {
    q: "What types of animation do you specialize in for SaaS?",
    a: "We focus on SaaS explainer videos, product demos, UX/UI motion, launch films and brand videos. Every project is built around a single business outcome — more signups, higher activation, a stronger launch — not animation for animation's sake.",
  },
  {
    q: "How long does a typical SaaS animation project take?",
    a: "Most explainer videos and product demos take 3–5 weeks from kickoff to delivery. Launch films and brand videos run 4–8 weeks. UI motion engagements can be as short as two weeks for a single flow.",
  },
  {
    q: "How much does a SaaS animation video cost?",
    a: "Pricing depends on length, animation style and revision rounds. Templated demos start around $2,000. Custom-animated explainers fall between $8,000 and $18,000. Flagship brand films range from $20,000 to $50,000+. You get a fixed quote after the discovery call.",
  },
  {
    q: "Do you write the script, or do we?",
    a: "Both work. Most clients hand us a rough product brief and we draft the script from scratch. If you have a strong in-house writer, we'll story-edit and storyboard against your draft.",
  },
  {
    q: "What deliverables do we get at the end?",
    a: "A master 16:9 video, two cutdowns (typically 30s and 6s for paid social), a vertical 9:16 variant, captioned versions, and source files on request. UI motion projects ship as Lottie, Rive or production-ready code.",
  },
  {
    q: "Can you match our existing brand and design system?",
    a: "Yes. We start every project with a brand audit, pull your tokens — color, typography, easing, iconography — and design within them so the video and your product feel like the same team made both.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Often. We have a Starter tier built specifically for pre-seed and seed-stage SaaS teams who need a credible explainer or launch film without an enterprise budget.",
  },
  {
    q: "Do you offer retainers or ongoing work?",
    a: "Yes. Many of our clients move to a monthly motion retainer after their first project — for feature launches, lifecycle content and always-on paid social variants.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SaaS Animation Pricing, Process & Timelines | SaaS Animate" },
      { name: "description", content: "Common questions about SaaS animation: pricing, timelines, deliverables, scripts, brand fit and retainers. Answered by the team at SaaS Animate." },
      { property: "og:title", content: "SaaS Animation FAQ" },
      { property: "og:description", content: "Pricing, timelines and process for SaaS animation projects." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="container-page pt-20 md:pt-28 pb-12 max-w-4xl">
        <p className="eyebrow eyebrow-dot">FAQ</p>
        <h1 className="mt-6 text-5xl md:text-7xl">Questions, answered honestly.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          The eight things every SaaS team asks us before booking. Don't see your question? <Link to="/contact" className="text-primary underline-offset-4 hover:underline">Get in touch</Link>.
        </p>
      </section>

      <section className="container-page pb-24 max-w-3xl">
        <div className="border-t border-hairline">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-hairline">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-6 flex items-start justify-between gap-6 group"
              >
                <span className="text-lg md:text-xl group-hover:text-primary transition-colors">{f.q}</span>
                <span className={`mt-1 w-7 h-7 rounded-full hairline flex items-center justify-center shrink-0 transition-transform ${open === i ? "rotate-45 border-primary text-primary" : ""}`}>
                  +
                </span>
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
