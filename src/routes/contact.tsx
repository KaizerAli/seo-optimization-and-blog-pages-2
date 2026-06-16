import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SaaS Animate — Start Your SaaS Animation Project" },
      { name: "description", content: "Tell us about your SaaS explainer video, product demo, UI motion or launch film. We reply within 24 hours with scope and timeline." },
      { property: "og:title", content: "Contact SaaS Animate" },
      { property: "og:description", content: "Start your SaaS animation project. We reply within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const services = ["Explainer video", "Product demo", "UX/UI animation", "Launch video", "Brand video", "Not sure yet"];
const budgets = ["< $5k", "$5k – $15k", "$15k – $30k", "$30k+"];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[1]);

  return (
    <>
      <section className="container-page pt-20 md:pt-28 pb-12">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16">
          <div>
            <p className="eyebrow eyebrow-dot">Contact</p>
            <h1 className="mt-6 text-5xl md:text-7xl">Let's make something worth watching.</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Send a short brief. We reply within 24 hours with a clear scope, timeline and quote — no sales calls
              required.
            </p>
            <div className="mt-12 space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</p>
                <a href="mailto:hello@saasanimate.com" className="mt-2 block text-xl hover:text-primary transition-colors">
                  hello@saasanimate.com
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Studio hours</p>
                <p className="mt-2 text-xl">Mon–Fri · 9am–6pm UTC</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Response time</p>
                <p className="mt-2 text-xl">Within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="surface-card p-8 md:p-10">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="inline-flex w-16 h-16 rounded-full bg-primary text-primary-foreground items-center justify-center text-2xl">✓</div>
                <h2 className="mt-6 text-3xl">Brief received.</h2>
                <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                  We'll reply from hello@saasanimate.com within 24 hours with next steps.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-6"
              >
                <Field label="Your name" htmlFor="name">
                  <input id="name" required className="form-input" placeholder="Jane Doe" />
                </Field>
                <Field label="Work email" htmlFor="email">
                  <input id="email" type="email" required className="form-input" placeholder="jane@company.com" />
                </Field>
                <Field label="Company" htmlFor="company">
                  <input id="company" className="form-input" placeholder="Acme SaaS" />
                </Field>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Service needed</p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setService(s)}
                        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${service === s ? "bg-primary text-primary-foreground border-primary" : "border-hairline text-muted-foreground hover:text-foreground"}`}
                      >{s}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Estimated budget</p>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${budget === b ? "bg-primary text-primary-foreground border-primary" : "border-hairline text-muted-foreground hover:text-foreground"}`}
                      >{b}</button>
                    ))}
                  </div>
                </div>

                <Field label="Tell us about the project" htmlFor="brief">
                  <textarea id="brief" rows={5} className="form-input resize-none" placeholder="What are you launching? Who is it for? When do you need it?" />
                </Field>

                <button type="submit" className="btn-base btn-primary w-full">Send brief →</button>
                <p className="text-xs text-muted-foreground text-center">We'll never share your details. Replies come from hello@saasanimate.com.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--hairline);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 200ms;
        }
        .form-input:focus { border-color: var(--primary); }
        .form-input::placeholder { color: oklch(0.55 0.01 250); }
      `}</style>
    </>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground block mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
