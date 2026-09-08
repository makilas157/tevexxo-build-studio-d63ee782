import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container-tv grid gap-8 py-14 md:grid-cols-3 md:items-center">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">Build. Learn. Scale.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
          {navLinks.slice(0, 5).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground md:text-right">
          © {new Date().getFullYear()} Tevexxo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
