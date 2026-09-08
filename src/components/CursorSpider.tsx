import { useEffect, useRef, useState } from "react";

/**
 * Small spider that trails the cursor with spring lag.
 * To remove it site-wide, delete the <CursorSpider /> line in src/routes/__root.tsx.
 */
export function CursorSpider() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let angle = 0;
    let raf = 0;
    let idleTimer: ReturnType<typeof setTimeout>;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setMoving(true);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setMoving(false), 220);
    };

    const tick = () => {
      const dx = tx - x;
      const dy = ty - y;
      x += dx * 0.11;
      y += dy * 0.11;
      if (Math.hypot(dx, dy) > 2) angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 14}px, ${y - 14}px, 0) rotate(${angle}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-7 w-7 md:block"
      style={{ filter: "drop-shadow(0 0 6px var(--color-accent))" }}
    >
      <svg viewBox="0 0 32 32" className="h-full w-full" fill="none">
        <g
          stroke="var(--color-accent)"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{
            transformOrigin: "16px 16px",
            animation: moving ? "tv-skitter 0.22s linear infinite" : "none",
          }}
        >
          <path d="M14 13 L5 7 L2 11" />
          <path d="M14 15 L4 14 L1 17" />
          <path d="M14 18 L4 21 L2 25" />
          <path d="M14 20 L7 26 L8 30" />
          <path d="M18 13 L27 7 L30 11" />
          <path d="M18 15 L28 14 L31 17" />
          <path d="M18 18 L28 21 L30 25" />
          <path d="M18 20 L25 26 L24 30" />
        </g>
        <ellipse cx="16" cy="19" rx="5" ry="6.5" fill="var(--color-accent)" />
        <circle cx="16" cy="12" r="3.4" fill="var(--color-primary)" />
      </svg>
      <style>{`@keyframes tv-skitter{0%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}100%{transform:rotate(-3deg)}}`}</style>
    </div>
  );
}
