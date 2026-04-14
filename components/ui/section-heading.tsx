type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ kicker, title, description, className = "" }: SectionHeadingProps) {
  return (
    <header className={`max-w-3xl space-y-5 ${className}`}>
      <p className="section-kicker text-[11px] uppercase tracking-[0.3em] text-moxera-highlight">{kicker}</p>
      <h2 className="section-title text-[2rem] font-semibold text-moxera-text md:text-[3.2rem]">{title}</h2>
      <p className="section-description text-[15px] text-moxera-text-soft md:text-[17px]">{description}</p>
    </header>
  );
}
