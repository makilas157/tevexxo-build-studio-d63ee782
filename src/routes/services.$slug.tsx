import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const item = services.find((s) => s.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Tevexxo" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.title} — Tevexxo` },
        { name: "description", content: item.description },
        { property: "og:title", content: `${item.title} — Tevexxo` },
        { property: "og:description", content: item.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { item } = Route.useLoaderData();
  return (
    <>
      <PageHeader tag="Service" title={item.title} intro={item.description} />
      <section className="section-pad">
        <div className="container-tv grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">{item.detail}</p>
            <ul className="mt-8 space-y-3">
              {item.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-solid group mt-10">
              Start a project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            width={1024}
            height={768}
            className="glass-panel h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
