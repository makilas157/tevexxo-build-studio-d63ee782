import { ArrowRight, Facebook, Instagram, MessageCircle, Twitter } from "lucide-react";
import { useRef } from "react";
import { SectionTag } from "./SectionTag";

const socials = [
  { name: "Instagram", handle: "@tevexxo", href: "https://instagram.com", Icon: Instagram },
  { name: "WhatsApp", handle: "Chat with us", href: "https://wa.me/", Icon: MessageCircle },
  { name: "Facebook", handle: "/tevexxo", href: "https://facebook.com", Icon: Facebook },
  { name: "Twitter / X", handle: "@tevexxo", href: "https://x.com", Icon: Twitter },
];

export function SocialRow() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--gx", `${e.clientX - r.left}px`);
        el.style.setProperty("--gy", `${e.clientY - r.top}px`);
      }}
      className="section-pad relative overflow-hidden border-y border-border bg-card/40"
      style={
        {
          backgroundImage:
            "radial-gradient(420px circle at var(--gx, 50%) var(--gy, 50%), color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 70%)",
        } as React.CSSProperties
      }
    >
      <div className="container-tv relative">
        <SectionTag>Connect</SectionTag>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold md:text-4xl">
          Follow what we&rsquo;re building.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map(({ name, handle, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="depth-card group flex items-center justify-between p-5"
            >
              <span className="flex items-center gap-3">
                <Icon size={20} className="text-accent" />
                <span>
                  <span className="block text-sm font-medium">{name}</span>
                  <span className="block text-xs text-muted-foreground">{handle}</span>
                </span>
              </span>
              <ArrowRight
                size={18}
                className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
