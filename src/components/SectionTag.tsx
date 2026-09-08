export function SectionTag({ children }: { children: string }) {
  return (
    <span className="section-tag">
      <span className="pulse-dot" />
      {children}
    </span>
  );
}
