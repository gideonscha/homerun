import { Container } from "@/components/ui/Container";
import { CONTACT_EMAIL } from "@/lib/constants";
import { ctaLinks } from "@/lib/whatsapp";

const services = [
  "Home & Deliveries",
  "Errands & Pickups",
  "Shopping",
  "Government",
  "Family",
  "Parents",
  "Travel & Hosting",
];

const company = [
  { label: "About Merle", href: "#about" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream/50 pt-10 pb-[30px]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="flex items-center gap-2.5">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-[16px] leading-none"
                aria-hidden
              >
                🎯
              </span>
              <span className="font-serif font-semibold text-[21px] text-cream tracking-[-0.5px]">
                Home Run
              </span>
            </a>
            <p className="mt-4 text-[13.5px] leading-[1.55] max-w-[280px]">
              The smart concierge for busy families in the Sharon. Vetted.
              Insured. Bilingual. Same-day.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.125em] uppercase text-cream">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-cream">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.125em] uppercase text-cream">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {company.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="hover:text-cream">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.125em] uppercase text-cream">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a
                  href={ctaLinks.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  WhatsApp →
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-cream"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-cream/40">EN · עברית</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-start md:items-center text-[12.5px]">
          <p>© 2026 Home Run · Ra&apos;anana, Israel</p>
          <p>Vetted · Insured · עוסק פטור</p>
        </div>
      </Container>
    </footer>
  );
}
