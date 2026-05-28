import { Container } from "@/components/ui/Container";

const steps = [
  {
    n: "1",
    title: "Message us",
    body:
      "WhatsApp Merle directly with what you need. Voice notes, lists, or just a stream of consciousness — whatever's easiest. English or Hebrew.",
  },
  {
    n: "2",
    title: "We confirm & schedule",
    body:
      "Merle replies within the hour with a clear plan, a price, and confirmed timings. You approve. We book.",
  },
  {
    n: "3",
    title: "It gets done",
    body:
      "We handle the task with photo updates throughout. Pay only after it's done — Bit, bank transfer, or card.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-cream py-[80px]">
      <Container>
        <div className="text-center max-w-[680px] mx-auto">
          <p className="text-[12px] font-bold tracking-[0.125em] text-terracotta uppercase">
            How it works
          </p>
          <h2 className="mt-3 font-serif text-[32px] md:text-[38px] leading-[1.1] tracking-[-0.5px] text-ink">
            Three steps. No friction.
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col items-center text-center">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-darker font-serif text-terracotta text-[22px] leading-none"
                aria-hidden
              >
                {s.n}
              </span>
              <h3 className="mt-4 font-serif text-[19px] text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-soft max-w-[320px]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
