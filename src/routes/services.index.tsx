import { createFileRoute } from "@tanstack/react-router";
import { CatalogCard } from "@/components/CatalogCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Tevexxo" },
      {
        name: "description",
        content:
          "Web development, mobile applications, UI & UX design, and cloud, data & AI engineering from the Tevexxo studio.",
      },
      { property: "og:title", content: "Services — Tevexxo" },
      {
        property: "og:description",
        content: "Four disciplines delivered by one senior team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        tag="What we do"
        title="Engineering that moves business forward."
        intro="Every engagement runs with senior people, a visible plan and a working product in front of you early."
      />
      <section className="section-pad">
        <div className="container-tv grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <CatalogCard item={s} base="/services/$slug" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
