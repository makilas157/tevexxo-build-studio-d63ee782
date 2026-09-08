import { createFileRoute } from "@tanstack/react-router";
import { CatalogCard } from "@/components/CatalogCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/site";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Tevexxo" },
      {
        name: "description",
        content:
          "FlowDesk, Pulseboard, CartSuite and custom platforms — in-house products built by the Tevexxo studio.",
      },
      { property: "og:title", content: "Products — Tevexxo" },
      { property: "og:description", content: "Tools shaped by real work." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHeader
        tag="Our products"
        title="Tools shaped by real work."
        intro="Everything here started as something we needed ourselves, then earned its place with other teams."
      />
      <section className="section-pad">
        <div className="container-tv grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <CatalogCard item={p} base="/products/$slug" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
