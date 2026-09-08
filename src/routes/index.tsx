import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CursorGrid } from "@/components/CursorGrid";
import { CatalogCard } from "@/components/CatalogCard";
import { Reveal } from "@/components/Reveal";
import { SectionTag } from "@/components/SectionTag";
import { SocialRow } from "@/components/SocialRow";
import { products, services, stats } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tevexxo — We build the tech your business runs on" },
      {
        name: "description",
        content:
          "Tevexxo is a tech studio building software and shipping digital products: web, mobile, design, cloud, data and AI.",
      },
      { property: "og:title", content: "Tevexxo — Next-gen tech studio" },
      {
        property: "og:description",
        content: "Engineering that moves business forward. Software built and products shipped.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
        <CursorGrid />
        <div className="container-tv relative pb-24 pt-40 lg:pb-32 lg:pt-52">
          <SectionTag>Next-gen tech studio</SectionTag>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            We build the tech <span className="text-gradient">your business runs on.</span>
          </h1>
          <p className="mt-8 max-w-xl border-l-2 border-accent pl-5 text-base leading-relaxed text-muted-foreground">
            From first architecture call to launch and long after, we design, build and run the
            software that carries your operation — and ship products of our own along the way.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-solid group">
              Start a project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/products" className="btn-outline group">
              See our products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <dl className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 lg:grid-cols-4">
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
          <Reveal>
            <SectionTag>What we do</SectionTag>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold md:text-4xl">
              Engineering that moves business forward.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Four disciplines, one senior team, and a delivery process built to keep launches
              uneventful.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <CatalogCard item={s} base="/services/$slug" />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="btn-outline group">
              View all
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border">
        <div className="container-tv">
          <Reveal>
            <SectionTag>Our products</SectionTag>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold md:text-4xl">
              Tools shaped by real work.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <CatalogCard item={p} base="/products/$slug" />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/products" className="btn-outline group">
              View all
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <SocialRow />
    </>
  );
}
