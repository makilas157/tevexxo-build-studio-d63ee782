import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blog — Tevexxo" },
      {
        name: "description",
        content:
          "Notes from the Tevexxo studio on delivery cadence, design systems, applied AI and building fast products.",
      },
      { property: "og:title", content: "Blog — Tevexxo" },
      { property: "og:description", content: "Writing from the studio floor." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <>
      <PageHeader
        tag="Blogs"
        title="Writing from the studio floor."
        intro="Practical notes on how we build, what we got wrong, and what we would do again."
      />
      <section className="section-pad">
        <div className="container-tv grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <article className="catalog-card group flex h-full flex-col">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.date}
                  </span>
                  <h2 className="mt-3 font-display text-lg font-semibold leading-snug">
                    {p.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Read article
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
