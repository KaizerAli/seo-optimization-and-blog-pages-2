import { createFileRoute, Link } from "@tanstack/react-router";
import { getPostBySlug } from "../lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) {
      throw new Error("Post not found");
    }
    return { post };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <article className="container-page pt-20 md:pt-28 pb-24 max-w-4xl">
      <Link to="/blog" className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
        ← Back to all posts
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-muted-foreground">{post.readTime}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display leading-tight mb-6">
          {post.title}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
          {post.description}
        </p>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span>By {post.author}</span>
          <span>·</span>
          <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
        </div>
      </header>

      {post.image && (
        <div className="relative aspect-video rounded-2xl overflow-hidden surface-card mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="space-y-8">
        {post.body.map((section, index) => (
          <div key={index}>
            {section.heading && (
              <h2 className="text-2xl md:text-3xl font-display mt-12 mb-6 text-primary">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-16 surface-card p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-display mb-4">
          Ready to create your explainer video?
        </h3>
        <p className="text-muted-foreground mb-8">
          Let's discuss how we can help you convert more visitors into customers.
        </p>
        <Link to="/contact" className="btn-base btn-primary">
          Start a project →
        </Link>
      </div>
    </article>
  );
}
