import { createFileRoute } from "@tanstack/react-router";
import abstract2 from "@/assets/abstract-2.jpg";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionTag } from "@/components/SectionTag";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tevexxo — build, learn, scale" },
      {
        name: "description",
        content:
          "The story, mission and values behind Tevexxo, a small senior studio building software and shipping its own products.",
      },
      { property: "og:title", content: "About Tevexxo" },
      { property: "og:description", content: "Build. Learn. Scale." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2020", body: "Two engineers, one contract, and a stubborn belief that delivery should be boring." },
  { year: "2022", body: "First in-house product, FlowDesk, released after using it internally for a year." },
  { year: "2024", body: "Design and data practices added; team grows to a dozen senior specialists." },
  { year: "2026", body: "Thirty products shipped and a studio that still fits in one room." },
];

const values = [
  { title: "Say the real number", body: "Estimates are honest even when honesty is inconvenient." },
  { title: "Own the outcome", body: "We are not done when the code merges. We are done when it works." },
  { title: "Leave it better", body: "Every handover includes documentation we would want to inherit." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        tag="About"
        title="A small studio that builds like an owner."
        intro="Tevexxo exists to make serious software feel obvious to use and calm to run."
      />

      <section className="section-pad">
        <div className="container-tv grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                We started Tevexxo after years of watching good ideas stall inside slow delivery
                processes. The problem was rarely talent. It was distance — between the people who
                understood the business and the people writing the code.
              </p>
              <p>
                So we built a studio with as little distance as possible. Senior engineers and
                designers work directly with the people who own the outcome. Plans are visible.
                Releases are small and frequent. Nothing important lives only in someone&rsquo;s head.
              </p>
              <p>
                Building our own products keeps us honest. When you maintain something for years,
                you stop making decisions that look clever in month one and hurt in month twelve.
                That discipline is what clients are really buying.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={abstract2}
              alt="Tevexxo studio abstract"
              loading="lazy"
              width={1024}
              height={768}
              className="glass-panel h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 section-pad">
        <div className="container-tv">
          <SectionTag>Timeline</SectionTag>
          <div className="mt-10 space-y-px">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 70}>
                <div className="grid gap-2 border-t border-border py-6 md:grid-cols-[120px_1fr]">
                  <span className="font-display text-xl font-semibold text-primary">{t.year}</span>
                  <p className="text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-tv">
          <SectionTag>Values</SectionTag>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="depth-card h-full p-6">
                  <h2 className="font-display text-lg font-semibold">{v.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
