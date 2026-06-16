export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "why-saas-explainer-videos-convert",
    title: "Why SaaS Explainer Videos Convert 3x Better Than Static Pages",
    description:
      "Data-backed reasons SaaS companies use animated explainer videos to lift demo bookings, trial signups, and activation.",
    date: "2026-05-28",
    readTime: "6 min read",
    category: "Strategy",
    body: [
      {
        paragraphs: [
          "If your SaaS landing page is converting under 3%, the bottleneck is rarely the headline. It is comprehension. Visitors land, skim, and leave because the product looks like every other dashboard. An animated explainer video collapses 800 words of copy into a 60-second story buyers can finish before their attention budget runs out.",
        ],
      },
      {
        heading: "The numbers that matter",
        paragraphs: [
          "Wyzowl's 2025 State of Video report found 87% of marketers say video has directly increased sales, and SaaS pages with a hero video convert at roughly 2.6x the rate of identical pages without one.",
          "More importantly, viewers retain 95% of a message when watched in video versus 10% when read in text. For complex products — API platforms, vertical SaaS, AI tools — that retention gap is the difference between a booked demo and a bounce.",
        ],
      },
      {
        heading: "What a great SaaS explainer actually does",
        paragraphs: [
          "It opens with the pain in the buyer's language, shows the product solving it in real UI motion, and closes with a single, unmissable next step. No mascots. No generic isometric clouds. Just your product, narrated with restraint.",
          "At SaaS Animate we script for one outcome per video, storyboard against the actual product, and animate in After Effects with motion that mirrors your real UI — so the video and the app feel like the same brand.",
        ],
      },
    ],
  },
  {
    slug: "product-demo-video-checklist",
    title: "The 12-Point Product Demo Video Checklist for SaaS Founders",
    description:
      "Everything to lock before you record or animate a product demo video — script, scope, screen captures, voiceover and CTA.",
    date: "2026-05-12",
    readTime: "8 min read",
    category: "Production",
    body: [
      {
        paragraphs: [
          "A product demo video is the single most reused asset in a SaaS go-to-market stack. It lives on the homepage, in cold outbound, in onboarding emails, on G2, in sales decks. Get it wrong and you reshoot for years. This checklist is what we run with founders before a single frame is animated.",
        ],
      },
      {
        heading: "Pre-production",
        paragraphs: [
          "1. One audience, one outcome. 2. A scripted hook under eight seconds. 3. A clearly defined ICP problem. 4. A primary CTA that maps to a tracked URL. 5. Brand tokens — colors, type, motion — locked in a single source file.",
        ],
      },
      {
        heading: "Production",
        paragraphs: [
          "6. UI captured at 2x retina, 60fps. 7. Cursor motion eased, never linear. 8. Voiceover recorded in a treated room with a backup take. 9. Sound design layered for every transition. 10. Subtitles burned-in for silent autoplay.",
        ],
      },
      {
        heading: "Post-launch",
        paragraphs: [
          "11. A 15-second cutdown for paid social. 12. A vertical 9:16 variant for LinkedIn and TikTok. Reuse beats rebuild every time.",
        ],
      },
    ],
  },
  {
    slug: "ui-animation-principles-for-saas",
    title: "7 UI Animation Principles Every SaaS Designer Should Know",
    description:
      "From easing curves to staggered reveals — the motion principles that make modern SaaS interfaces feel premium.",
    date: "2026-04-22",
    readTime: "7 min read",
    category: "UI Motion",
    body: [
      {
        paragraphs: [
          "Motion is the difference between a SaaS UI that feels expensive and one that feels like a prototype. These are the seven principles we apply on every product motion engagement.",
        ],
      },
      {
        heading: "1. Easing is identity",
        paragraphs: [
          "Linear motion is a bug. Pick a custom cubic-bezier — we default to (0.22, 1, 0.36, 1) — and apply it everywhere. Consistency is what makes a brand recognizable in motion.",
        ],
      },
      {
        heading: "2. Animate state, not decoration",
        paragraphs: [
          "Every animation should communicate a change in state: loading, success, error, navigation. Decorative loops without meaning erode trust.",
        ],
      },
      {
        heading: "3. Respect reduced-motion",
        paragraphs: [
          "Wrap non-essential motion in prefers-reduced-motion. Accessibility is a brand value, not a checkbox.",
        ],
      },
      {
        heading: "Principles 4–7",
        paragraphs: [
          "Stagger related elements at 40–80ms. Keep durations between 180–320ms for UI, 400–700ms for hero moments. Anchor motion to the user's cursor or focus. And finally — cut anything you cannot defend in a single sentence.",
        ],
      },
    ],
  },
  {
    slug: "saas-launch-video-playbook",
    title: "The SaaS Launch Video Playbook: From Product Hunt to LinkedIn",
    description:
      "How to plan, produce and distribute a launch video that earns attention on Product Hunt, X, LinkedIn and YouTube in week one.",
    date: "2026-04-03",
    readTime: "9 min read",
    category: "Launch",
    body: [
      {
        paragraphs: [
          "A SaaS launch video has 90 seconds to do three things: explain what you built, prove it works, and make people want to share it. Most launches fail step three.",
        ],
      },
      {
        heading: "Plan the cutdowns first",
        paragraphs: [
          "Before scripting the hero video, write the 6-second teaser, the 30-second LinkedIn cut, and the 9:16 vertical. The hero is the parent of every other asset in your launch week.",
        ],
      },
      {
        heading: "Distribution beats production",
        paragraphs: [
          "A perfectly animated film with no distribution plan loses to a rough Loom with a clear posting schedule. Map every channel — Product Hunt gallery, X pinned post, founder LinkedIn, YouTube short, partner newsletters — before the edit is locked.",
        ],
      },
    ],
  },
  {
    slug: "brand-motion-systems",
    title: "Brand Motion Systems: The New Frontier of SaaS Identity",
    description:
      "Why leading SaaS brands ship motion guidelines alongside logos and color tokens — and how to build one for your team.",
    date: "2026-03-18",
    readTime: "5 min read",
    category: "Brand",
    body: [
      {
        paragraphs: [
          "Linear, Vercel, Arc and Stripe all ship motion as a first-class brand primitive. A logo defines who you are at rest. Motion defines who you are in use.",
        ],
      },
      {
        heading: "What goes in a motion system",
        paragraphs: [
          "Easing curves, duration scales, choreography rules, audio guidelines, and a Lottie or Rive library teams can pull from. We deliver motion systems as a Figma file plus a code-ready token set.",
        ],
      },
    ],
  },
  {
    slug: "how-much-saas-animation-costs",
    title: "How Much Does a SaaS Animation Video Cost in 2026?",
    description:
      "An honest breakdown of SaaS animation pricing — from $2k templated demos to $50k flagship brand films.",
    date: "2026-03-02",
    readTime: "6 min read",
    category: "Pricing",
    body: [
      {
        paragraphs: [
          "The honest answer: a SaaS animation video costs between $2,000 and $50,000 depending on scope. Anyone quoting a single number without asking about your script, length, animation style, voiceover and revision rounds is guessing.",
        ],
      },
      {
        heading: "Three realistic tiers",
        paragraphs: [
          "Starter ($2k–$6k): 30–60s screen-capture demo with light motion, AI voiceover, one revision round. Growth ($8k–$18k): 60–90s custom-animated explainer, professional VO, sound design, two cutdowns. Flagship ($20k–$50k+): brand film, original score, motion system, multi-language deliverables.",
        ],
      },
      {
        heading: "Where the budget actually goes",
        paragraphs: [
          "Scripting is 15%. Storyboard and design is 30%. Animation is 40%. Sound, VO and revisions are 15%. Cutting animation to save money is the most common — and most expensive — mistake.",
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);
