import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/globals.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SaaS Animate — Animation studio for SaaS explainers, demos & UI motion" },
      { name: "description", content: "SaaS Animate is the animation studio for modern SaaS. Explainer videos, product demos, UX/UI animation, launch films and brand motion that move metrics." },
      { name: "keywords", content: "saas animation studio, saas explainer videos, product demo videos, ui motion design, saas launch video, brand motion, animated explainer video, motion design for saas, saas video marketing, explainer video production" },
      { name: "author", content: "SaaS Animate" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0b0b0c" },
      { property: "og:site_name", content: "SaaS Animate" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "SaaS Animate — Animation studio for SaaS" },
      { property: "og:description", content: "Explainer videos, product demos, UX/UI animation and launch films for SaaS teams." },
      { property: "og:url", content: "https://saasanimate.com" },
      { property: "og:image", content: "https://saasanimate.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SaaS Animate — Animation studio for SaaS" },
      { name: "twitter:description", content: "Explainer videos, product demos, UX/UI animation and launch films for SaaS teams." },
      { name: "twitter:image", content: "https://saasanimate.com/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
