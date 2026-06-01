import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ctaLinks } from "@/lib/whatsapp";
import { DiaryCard } from "./DiaryCard";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-gradient-to-b from-cream to-cream-darker"
    >
      <Container className="pt-6 md:pt-10 pb-[40px] md:pb-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
          {/* Copy column */}
          <div className="text-center md:text-left">
            <h1 className="font-serif font-semibold text-[38px] md:text-[56px] leading-[1.05] tracking-[-0.5px] text-ink">
              Get your <em className="italic text-terracotta">week</em> back.
            </h1>

            <p className="mt-5 md:mt-6 text-[17px] md:text-[19px] leading-[1.5] text-ink-soft max-w-[520px] mx-auto md:mx-0">
              We run the errands, waits, and queues that eat your days. You
              run your life.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center md:justify-start">
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
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-1 text-terracotta font-medium hover:text-terracotta-dark min-h-[44px] px-2"
              >
                See what we do →
              </a>
            </div>

            <p className="mt-7 text-[13.5px] text-muted-brand">
              Vetted · Insured · Same-day response
            </p>
          </div>

          {/* Diary card column */}
          <div className="flex justify-center md:justify-end">
            <DiaryCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
