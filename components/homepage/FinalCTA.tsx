import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/constants";
import { ctaLinks } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="bg-ink text-cream py-[80px]">
      <Container>
        <div className="text-center mx-auto max-w-[600px]">
          <h2 className="font-serif text-[30px] md:text-[42px] leading-[1.1] tracking-[-0.5px]">
            Ready to get your{" "}
            <em className="italic text-terracotta">week</em> back?
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.55] text-cream/70 max-w-[480px] mx-auto">
            Tell us what&apos;s on your plate. We&apos;ll figure out what we
            can take off it. One message, no commitment.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              href={ctaLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <MessageCircle size={18} strokeWidth={1.75} aria-hidden />
              Message Merle on WhatsApp
            </Button>
          </div>

          <p className="mt-6 text-[13.5px] text-cream/60">
            Or{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline underline-offset-2 hover:text-cream"
            >
              email {CONTACT_EMAIL} →
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
