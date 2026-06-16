import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center container-page py-32 text-center">
        <div>
          <p className="eyebrow eyebrow-dot">404 · Off frame</p>
          <h1 className="mt-4 text-6xl md:text-7xl">Page not found</h1>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            That page never made it past the storyboard. Let's get you back on screen.
          </p>
          <div className="mt-8">
            <a href="/" className="btn-base btn-primary">Back to home</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center container-page py-32 text-center">
      <div>
        <h1 className="text-3xl">Something went off-script</h1>
        <p className="mt-2 text-muted-foreground">Try again or head home.</p>
        <div className="mt-6 flex gap-2 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-base btn-primary">Try again</button>
          <a href="/" className="btn-base btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SaaS Animate — Animation studio for SaaS explainers, demos & UI motion" },
      { name: "description", content: "SaaS Animate is the animation studio for modern SaaS. Explainer videos, product demos, UX/UI animation, launch films and brand motion that move metrics." },
      { name: "author", content: "SaaS Animate" },
      { name: "theme-color", content: "#0b0b0c" },
      { property: "og:site_name", content: "SaaS Animate" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "SaaS Animate — Animation studio for SaaS" },
      { property: "og:description", content: "Explainer videos, product demos, UX/UI animation and launch films for SaaS teams." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SaaS Animate — Animation studio for SaaS" },
      { name: "twitter:description", content: "Explainer videos, product demos, UX/UI animation and launch films for SaaS teams." },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SaaS Animate",
          url: "https://saasanimate.com",
          description: "Animation studio for SaaS explainer videos, product demos, UI animation, launch films and brand motion.",
          email: "hello@saasanimate.com",
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
