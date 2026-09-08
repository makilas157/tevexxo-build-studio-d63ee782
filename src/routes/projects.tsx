import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Tevexxo" },
      {
        name: "description",
        content:
          "Selected case studies from Tevexxo: logistics platforms, health apps, headless commerce and streaming data work.",
      },
      { property: "og:title", content: "Projects — Tevexxo" },
      { property: "og:description", content: "Work we have shipped, and what it changed." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        tag="Selected work"
        title="Projects, and what they changed."
        intro="A sample of recent engagements. Full case studies available on request."
      />
      <section className="section-pad">
        <div className="container-tv">
          <ProjectCarousel />
        </div>
      </section>
      <section className="border-t border-border section-pad">
        <div className="container-tv grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <article className="catalog-card h-full">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <span className="section-tag">{p.tag}</span>
                  <h2 className="mt-3 font-display text-lg font-semibold">{p.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.result}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
