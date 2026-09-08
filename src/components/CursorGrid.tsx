import { useEffect, useRef } from "react";

/** Subtle dot-grid that brightens around the cursor. Purely decorative. */
export function CursorGrid({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={
        {
          "--mx": "50%",
          "--my": "50%",
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 55%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(220px circle at var(--mx) var(--my), black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(220px circle at var(--mx) var(--my), black 0%, transparent 75%)",
          opacity: 0.6,
        } as React.CSSProperties
      }
    />
  );
}
