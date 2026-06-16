import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`} aria-label="SaaS Animate home">
      <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-lg bg-foreground text-background overflow-hidden">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden>
          <path d="M5 18 L12 6 L19 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="14" r="1.6" fill="var(--primary)" />
        </svg>
      </span>
      <span className="font-display text-[1.15rem] tracking-tight leading-none">
        SaaS<span className="text-primary">.</span>Animate
      </span>
    </Link>
  );
}
