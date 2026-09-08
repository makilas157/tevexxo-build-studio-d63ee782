import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CatalogItem } from "@/data/site";

export function CatalogCard({
  item,
  base,
}: {
  item: CatalogItem;
  base: "/services" | "/products";
}) {
  return (
    <Link
      to={`${base}/$slug`}
      params={{ slug: item.slug }}
      className="catalog-card group flex flex-col"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        width={1024}
        height={768}
        className="h-48 w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Learn more
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
