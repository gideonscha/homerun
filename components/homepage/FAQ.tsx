import { Container } from "@/components/ui/Container";

const items = [
  {
    q: "Are you insured?",
    a: "Yes. We carry full liability and third-party insurance covering work in your home, in transit, and at any public location we operate. Certificate available on request.",
  },
  {
    q: "How do I know I can trust someone in my home?",
    a: "Every Home Run helper goes through reference checks, criminal background verification, and a personal interview with Merle. Most are people she's known for years through the Sharon community. Every job is documented with photos.",
  },
  {
    q: "Where do you operate?",
    a: "Ra'anana, Herzliya, Kfar Saba, Hod HaSharon, and immediately adjacent neighborhoods. Outside this zone we can sometimes accommodate — ask us.",
  },
  {
    q: "How quickly can you respond?",
    a: "WhatsApp messages get a personal reply within the hour during business hours (Sun–Thu 8–19, Fri 8–13). Monthly members get same-day service guaranteed.",
  },
  {
    q: "What if something goes wrong?",
    a: "We carry liability insurance for accidents, damage, or loss. We also document every task with photos and updates, so there's a clear record. Issues are rare — we treat your home like ours.",
  },
  {
    q: "How do I pay?",
    a: "Bit, bank transfer, or credit card. You only pay after the task is done. Monthly members are billed at the start of each month.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts. Monthly plans run month-to-month — cancel before your next billing cycle. Tasks and hourly bookings can be rescheduled up to 4 hours before the start time at no charge.",
  },
  {
    q: "What languages do you work in?",
    a: "Fluent Hebrew and English. We're equally comfortable navigating Israeli bureaucracies and explaining things to non-Hebrew-speaking family members.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-cream py-[80px]">
      <Container>
        <div className="text-center max-w-[680px] mx-auto">
          <p className="text-[12px] font-bold tracking-[0.125em] text-terracotta uppercase">
            FAQ
          </p>
          <h2 className="mt-3 font-serif text-[32px] md:text-[38px] leading-[1.1] tracking-[-0.5px] text-ink">
            Questions families ask first.
          </h2>
        </div>

        <div className="mt-10 mx-auto max-w-[760px]">
          {items.map((item) => (
            <details
              key={item.q}
              className="group border-b border-brand-border py-5"
            >
              <summary className="flex items-center justify-between gap-5 text-[16.5px] font-semibold text-ink min-h-[44px]">
                <span>{item.q}</span>
                <span
                  className="faq-toggle text-terracotta text-[22px] leading-none transition-transform duration-200 shrink-0"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.6] text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
