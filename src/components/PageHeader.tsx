import { CursorGrid } from "./CursorGrid";
import { SectionTag } from "./SectionTag";

export function PageHeader({
  tag,
  title,
  intro,
}: {
  tag: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <CursorGrid />
      <div className="container-tv relative pb-16 pt-36 lg:pb-20 lg:pt-44">
        <SectionTag>{tag}</SectionTag>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight lg:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-xl text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}
