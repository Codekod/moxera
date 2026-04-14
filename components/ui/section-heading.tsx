type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
};

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl space-y-4">
      <p className="text-sm uppercase tracking-[0.25em] text-moxera-highlight">{kicker}</p>
      <h2 className="text-3xl font-semibold leading-tight text-moxera-text md:text-5xl">{title}</h2>
      <p className="text-base leading-relaxed text-moxera-text-soft md:text-lg">{description}</p>
    </header>
  );
}
