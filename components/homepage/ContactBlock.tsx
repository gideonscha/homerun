import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, BUSINESS_HOURS } from "@/lib/constants";
import { ctaLinks } from "@/lib/whatsapp";

export function ContactBlock() {
  return (
    <section
      id="contact"
      className="text-white py-[70px]"
      style={{
        background:
          "linear-gradient(135deg, var(--color-terracotta), var(--color-terracotta-dark))",
      }}
    >
      <Container>
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-[12px] font-bold tracking-[0.125em] uppercase text-white/75">
            Get in touch
          </p>
          <h2 className="mt-3 font-serif text-[32px] md:text-[38px] leading-[1.1] tracking-[-0.5px]">
            Tell us what&apos;s on your plate.
          </h2>
          <p className="mt-4 text-[17px] md:text-[18px] leading-[1.55] text-white/95">
            Message us on WhatsApp and Merle will personally reply within the
            hour. No forms. No commitment. Tell us what&apos;s eating your week
            and we&apos;ll come back with a plan and a price.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              href={ctaLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              variant="white"
              size="lg"
              className="w-full sm:w-auto"
            >
              💬 WhatsApp Merle
            </Button>
            <Button
              href={`mailto:${CONTACT_EMAIL}`}
              variant="white-outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              ✉ Email instead
            </Button>
          </div>

          <p className="mt-6 text-[13px] text-white/70">
            Open {BUSINESS_HOURS}
          </p>
        </div>
      </Container>
    </section>
  );
}
