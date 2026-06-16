import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="container-page py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Animation studio for SaaS — explainers, product demos, UI motion and launch films that move metrics.
          </p>
        </div>
        <FooterCol title="Studio" items={[
          { to: "/services", label: "Services" },
          { to: "/portfolio", label: "Portfolio" },
          { to: "/contact", label: "Contact" },
        ]} />
        <FooterCol title="Resources" items={[
          { to: "/blog", label: "Blog" },
          { to: "/faq", label: "FAQ" },
        ]} />
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:hello@saasanimate.com" className="hover:text-primary transition-colors">hello@saasanimate.com</a></li>
            <li className="text-muted-foreground">Remote · Worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="container-page py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SaaS Animate. All rights reserved.</p>
          <p className="font-mono">saasanimate.com</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="hover:text-primary transition-colors">{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
