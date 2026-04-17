type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ kicker, title, description, className = "" }: SectionHeadingProps) {
  return (
    <header className={`max-w-3xl space-y-4 md:space-y-5 ${className}`}>
      <p className="section-kicker text-[11px] uppercase tracking-[0.22em] text-moxera-highlight md:tracking-[0.26em]">{kicker}</p>
      <h2 className="section-title text-[clamp(1.9rem,6.4vw,3.2rem)] font-semibold text-moxera-text">{title}</h2>
      <p className="section-description text-[15px] leading-[1.8] text-moxera-text-soft md:text-[17px]">{description}</p>
    </header>
  );
}
