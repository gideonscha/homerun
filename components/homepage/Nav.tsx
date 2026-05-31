import { Container } from "@/components/ui/Container";
import { TickMark } from "@/components/ui/TickMark";
import { ctaLinks } from "@/lib/whatsapp";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-[100] bg-cream/85 backdrop-blur-md border-b border-brand-border"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <Container className="flex items-center justify-between h-[60px]">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Home Run — back to top"
        >
          <TickMark size={32} />
          <span className="font-serif font-semibold text-[21px] tracking-[-0.5px] text-ink">
            Home Run
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[14.5px] text-ink-soft">
          <a href="/#services" className="hover:text-terracotta">
            Services
          </a>
          <a href="/#how" className="hover:text-terracotta">
            How it works
          </a>
          <a href="/#about" className="hover:text-terracotta">
            About Merle
          </a>
          <a href="/#faq" className="hover:text-terracotta">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <span
            className="text-[12.5px] text-muted-brand bg-cream-darker rounded-full px-2.5 py-1 hidden sm:inline-flex"
            aria-label="Language toggle placeholder"
          >
            EN · עב
          </span>
          <a
            href={ctaLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-terracotta text-white text-[14px] font-medium px-4 py-2.5 min-h-[44px] hover:bg-terracotta-dark transition-colors"
          >
            Message us
          </a>
        </div>
      </Container>
    </header>
  );
}
