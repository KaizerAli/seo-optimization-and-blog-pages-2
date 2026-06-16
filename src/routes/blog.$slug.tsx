import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostBySlug, posts, type BlogPost } from "../lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} | SaaS Animate` : "Article | SaaS Animate";
    const description = post?.description ?? "SaaS animation insights from SaaS Animate.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: post?.title ?? title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:title", content: post?.title ?? title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: post
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              author: { "@type": "Organization", name: "SaaS Animate" },
              publisher: { "@type": "Organization", name: "SaaS Animate" },
            }),
          }]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-5xl">Article not found</h1>
      <Link to="/blog" className="btn-base btn-primary mt-8">Back to blog</Link>
    </div>
  ),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <section className="container-page pt-20 md:pt-28 pb-12 max-w-3xl">
        <Link to="/blog" className="font-mono text-xs text-muted-foreground hover:text-primary">← Back to blog</Link>
        <div className="mt-6 flex gap-3 font-mono text-xs text-muted-foreground">
          <span className="text-primary">{post.category}</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl">{post.title}</h1>
        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">{post.description}</p>
      </section>

      <section className="container-page pb-20 max-w-3xl">
        <div className="prose-custom space-y-10">
          {post.body.map((block, i) => (
            <div key={i}>
              {block.heading && <h2 className="text-2xl md:text-3xl mb-4">{block.heading}</h2>}
              {block.paragraphs.map((p, j) => (
                <p key={j} className="text-foreground/85 leading-[1.8] mb-4 text-[1.05rem]">{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 surface-card p-8 md:p-10">
          <h3 className="text-2xl">Need help with the project this article covers?</h3>
          <p className="mt-3 text-muted-foreground">We're booking new SaaS engagements this quarter.</p>
          <Link to="/contact" className="btn-base btn-primary mt-6">Talk to the studio →</Link>
        </div>
      </section>

      <section className="container-page pb-24">
        <h2 className="text-2xl md:text-3xl mb-8">More from the journal</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="surface-card p-6 hover:border-primary/40 transition-colors group"
            >
              <p className="font-mono text-xs text-muted-foreground">{p.category}</p>
              <h3 className="mt-3 text-lg group-hover:text-primary transition-colors">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
