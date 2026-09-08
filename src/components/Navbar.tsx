import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CursorGrid } from "./CursorGrid";
import { Logo } from "./Logo";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="relative border-b border-border bg-background/70 backdrop-blur-xl">
        <CursorGrid />
        <nav className="container-tv relative flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-solid !px-5 !py-2 !text-[0.8rem]">
              Contact us
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-foreground lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
            <div className="container-tv flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm text-muted-foreground hover:bg-card hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-solid mt-2 justify-center"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
