import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 text-sm text-moxera-text-soft md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Moxera. Ankara merkezli butik teknoloji partneri.</p>
        <p>meliheken@moxera.com.tr · 0 533 969 78 06</p>
      </Container>
    </footer>
  );
}
