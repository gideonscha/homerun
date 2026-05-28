import type { Metadata } from "next";
import { Nav } from "@/components/homepage/Nav";
import { Footer } from "@/components/homepage/Footer";
import { WhatsAppFAB } from "@/components/homepage/WhatsAppFAB";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { ServiceCategoryBlock } from "@/components/homepage/ServiceCategory";
import { ctaLinks } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title:
    "The full menu — Home Run · errands, waits, queues, and family logistics",
  description:
    "Every service we offer, with prices. Pharmacy runs, technician waits, Misrad Harishui, school pickups, parent care, pre-Shabbat prep — book any of them on WhatsApp.",
  openGraph: {
    title: "The full Home Run menu",
    description:
      "Every service, every price. Book any of them on WhatsApp in one tap.",
    type: "website",
    locale: "en_IL",
    siteName: "Home Run",
  },
};

const totalServices = SERVICE_CATEGORIES.reduce(
  (n, c) => n + c.services.length,
  0,
);

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-cream to-cream-darker">
          <Container className="py-[60px] md:py-[80px]">
            <div className="text-center max-w-[720px] mx-auto">
              <p className="text-[12px] font-bold tracking-[0.125em] text-terracotta uppercase">
                The full menu
              </p>
              <h1 className="mt-3 font-serif font-semibold text-[34px] md:text-[48px] leading-[1.05] tracking-[-0.5px] text-ink">
                Everything we do. Every price.
              </h1>
              <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-ink-soft">
                {totalServices} services across{" "}
                {SERVICE_CATEGORIES.length} categories. Tap{" "}
                <strong className="text-terracotta">Book on WhatsApp</strong>{" "}
                next to anything to message Merle with that exact request
                pre-filled — she replies within the hour.
              </p>
            </div>

            <nav
              aria-label="Service categories"
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              {SERVICE_CATEGORIES.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-border px-3.5 py-2 text-[13px] text-ink-soft hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  <span aria-hidden>{c.icon}</span>
                  <span>{c.title}</span>
                </a>
              ))}
            </nav>
          </Container>
        </section>

        <section className="bg-cream-darker">
          <Container className="py-[60px] md:py-[80px]">
            <div className="mx-auto max-w-[820px] space-y-5 md:space-y-6">
              {SERVICE_CATEGORIES.map((category) => (
                <ServiceCategoryBlock
                  key={category.id}
                  category={category}
                  mode="open"
                />
              ))}
            </div>

            <p className="mt-10 text-center text-[16px] text-ink-soft">
              Don&apos;t see it?{" "}
              <strong className="text-terracotta font-semibold">
                Just ask.
              </strong>{" "}
              If it&apos;s within reason, we&apos;ll figure it out.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                href={ctaLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                💬 Message Merle on WhatsApp
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
