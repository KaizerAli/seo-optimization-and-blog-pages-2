import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "../lib/blog-posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | SaaS Animate" },
      { name: "description", content: "Insights on SaaS explainer videos, product demos, and motion design." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="container-page pt-20 md:pt-28 pb-24">
      <div className="mb-12">
        <p className="eyebrow eyebrow-dot">Insights & guides</p>
        <h1 className="mt-6 text-5xl md:text-7xl">The SaaS motion playbook.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Practical guides and case studies from the SaaS Animate team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="surface-card overflow-hidden hover:border-primary/40 transition-colors group block"
          >
            {post.image && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl group-hover:text-primary transition-colors mb-3">
                {post.title}
              </h2>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {post.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/40">
                <span>{post.author}</span>
                <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
