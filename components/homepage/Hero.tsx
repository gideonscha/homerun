import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ctaLinks } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-gradient-to-b from-cream to-cream-darker"
    >
      <Container className="py-[50px] md:py-[80px]">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-serif font-semibold text-[38px] md:text-[56px] leading-[1.05] tracking-[-0.5px] text-ink max-w-[760px]">
            Get your <em className="italic text-terracotta">week</em> back.
          </h1>
          <p className="mt-5 md:mt-6 text-[17px] md:text-[19px] leading-[1.5] text-ink-soft max-w-[560px]">
            We run the errands, waits, and queues that eat your days. You run
            your life.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              href={ctaLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Message us on WhatsApp
            </Button>
            <Button
              href="#services"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              See what we do
            </Button>
          </div>

          <p className="mt-7 text-[13.5px] text-muted-brand">
            Vetted · Insured · Same-day response
          </p>
        </div>
      </Container>
    </section>
  );
}
