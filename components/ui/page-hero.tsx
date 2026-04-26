import { Container } from "@/components/ui/container";

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute right-[10%] top-10 h-44 w-44 rounded-full bg-moxera-highlight/12 blur-[90px]" />
      <div className="pointer-events-none absolute left-[8%] bottom-0 h-52 w-52 rounded-full bg-[#1D2A57]/36 blur-[110px]" />
      <Container>
        <div className="scene-shell relative overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(102,230,218,0.10),transparent_34%)]" />
          <div className="relative max-w-4xl space-y-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-moxera-highlight">{kicker}</p>
            <h1 className="font-[var(--font-sora)] text-[clamp(2.35rem,7vw,5.2rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-moxera-text">
              {title}
            </h1>
            <p className="max-w-3xl text-[15px] leading-[1.85] text-moxera-text-soft md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
