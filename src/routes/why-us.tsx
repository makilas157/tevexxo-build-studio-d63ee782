import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, LifeBuoy, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionTag } from "@/components/SectionTag";
import { stats } from "@/data/site";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Tevexxo — senior teams, transparent delivery" },
      {
        name: "description",
        content:
          "Senior-only teams, transparent delivery, product thinking and post-launch support: why teams choose Tevexxo.",
      },
      { property: "og:title", content: "Why Tevexxo" },
      { property: "og:description", content: "The case for working with our studio." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUsPage,
});

const values = [
  {
    Icon: Users,
    title: "Senior-only teams",
    body: "The people in the kickoff call are the people writing the code. No hand-off to juniors after signature.",
  },
  {
    Icon: ShieldCheck,
    title: "Transparent delivery",
    body: "Shared boards, weekly demos and honest estimates. You always know what shipped and what is next.",
  },
  {
    Icon: Compass,
    title: "Product thinking",
    body: "We push back on scope that will not move a number, and propose the version that will.",
  },
  {
    Icon: LifeBuoy,
    title: "Post-launch support",
    body: "Monitoring, iteration and on-call cover after release, for as long as you need us.",
  },
];

const process = [
  { step: "01", title: "Discover", body: "Workflows, constraints and the outcome worth paying for." },
  { step: "02", title: "Shape", body: "Prototypes, architecture and a phased plan with real dates." },
  { step: "03", title: "Build", body: "Two-week cycles, working software in front of you each time." },
  { step: "04", title: "Run", body: "Launch, monitor, iterate and hand over cleanly." },
];

function WhyUsPage() {
  return (
    <>
      <PageHeader
        tag="Why us"
        title="Fewer people, more senior, closer to the outcome."
        intro="We stay small on purpose. It is the only way to keep quality and accountability in the same room."
      />

      <section className="section-pad">
        <div className="container-tv grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="depth-card h-full p-6">
                <v.Icon size={22} className="text-accent" />
                <h2 className="mt-4 font-display text-lg font-semibold">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/30 section-pad">
        <div className="container-tv">
          <SectionTag>How we work</SectionTag>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="glass-panel h-full p-6">
                  <span className="font-display text-2xl font-semibold text-primary">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-primary">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-tv">
          <Link to="/contact" className="btn-solid group">
            Talk to us
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
