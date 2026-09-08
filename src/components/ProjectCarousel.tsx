import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { projects } from "@/data/site";

export function ProjectCarousel() {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    track.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <button
          aria-label="Previous projects"
          onClick={() => scrollBy(-1)}
          className="btn-outline !p-3"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          aria-label="Next projects"
          onClick={() => scrollBy(1)}
          className="btn-outline !p-3"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <article
            key={p.name}
            className="catalog-card w-[85vw] shrink-0 snap-start sm:w-[360px]"
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              width={1024}
              height={768}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <span className="section-tag">{p.tag}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.result}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
