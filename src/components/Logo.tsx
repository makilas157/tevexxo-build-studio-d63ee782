import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="logo-mark block h-7 w-7 rounded-lg" />
      <span className="font-display text-lg font-semibold tracking-tight">tevexxo</span>
    </Link>
  );
}
