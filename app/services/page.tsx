import type { Metadata } from "next";
import { Nav } from "@/components/homepage/Nav";
import { Footer } from "@/components/homepage/Footer";
import { WhatsAppFAB } from "@/components/homepage/WhatsAppFAB";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { ServiceCategoryBlock } from "@/components/homepage/ServiceCategory";
import { MenuHeader } from "@/components/services/MenuHeader";
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

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-cream to-cream-darker">
          <Container className="py-[60px] md:py-[80px]">
            <MenuHeader as="h1" />
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
