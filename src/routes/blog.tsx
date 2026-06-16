import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "../lib/blog-posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "SaaS Animation Blog — Explainer Videos, Demos & UI Motion | SaaS Animate" },
      { name: "description", content: "Strategy, production and pricing guides for SaaS animation: explainer videos, product demos, UI motion, launch films and brand motion." },
      { property: "og:title", content: "SaaS Animation Blog — SaaS Animate" },
      { property: "og:description", content: "Strategy, production and pricing guides for SaaS animation." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="container-page pt-20 md:pt-28 pb-12 max-w-4xl">
        <p className="eyebrow eyebrow-dot">Journal</p>
        <h1 className="mt-6 text-5xl md:text-7xl">Notes on SaaS animation.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Strategy, production playbooks and pricing transparency from inside the studio.
        </p>
      </section>

      <section className="container-page pb-16">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="block surface-card overflow-hidden hover:border-primary/40 transition-colors group"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto bg-gradient-to-br from-[oklch(0.35_0.15_140)] via-[oklch(0.2_0.05_140)] to-background overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl text-primary/40">{featured.category}</span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex gap-3 font-mono text-xs text-muted-foreground">
                <span>{new Date(featured.date).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" })}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground">{featured.description}</p>
              <span className="mt-6 text-sm text-primary">Read article →</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="container-page pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="surface-card p-7 hover:border-primary/40 transition-colors group flex flex-col"
            >
              <div className="flex justify-between items-center font-mono text-xs text-muted-foreground">
                <span>{p.category}</span>
                <span>{p.readTime}</span>
              </div>
              <h3 className="mt-4 text-xl group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
              <span className="mt-6 font-mono text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" })}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
